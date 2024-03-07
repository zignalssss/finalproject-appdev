import { client , db_name} from '../../server.mjs';

export const updatePoint = async(req,res) => {
    const userId = req.body._id;
    const updatedPoint = req.body.point;
    try{
        await client.connect()
        const findUser = await client.db(db_name).collection("userData").findOne({_id:userId});
        const userpoint = findUser.point;
        const newpoint = userpoint - updatedPoint  ;
        if (!findUser) {
            res.status(401).json({ message: "User not found" });
            console.log("User not found");
            return false;
        }
        if(newpoint <= 0){
            await client.db(db_name).collection("userData").updateOne(
                { _id: userId },
                { $set: { point: 0 } },
                );
            return false;
        }
        await client.db(db_name).collection("userData").updateOne(
            { _id: userId },
            { $set: { point: newpoint } },
            );
        
        res.send("Update Point Successfuly")
    }catch(e){
        console.log(e)
    }
  
};