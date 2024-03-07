import { client , db_name} from '../../server.mjs';

export const addPoint = async(req,res) => {
    const userId = req.body._id;
    const updatedPoint = req.body.point;
    try{
        await client.connect()
        const findUser = await client.db(db_name).collection("userData").findOne({_id:userId});
        if (!findUser) {
            res.status(401).json({ message: "User not found" });
            console.log("User not found");
            return false;
        }
        const userpoint = findUser.point;
        const newpoint = updatedPoint + userpoint;
        await client.db(db_name).collection("userData").updateOne(
            { _id: userId },
            { $set: { point: newpoint } },
            );
    }catch(e){
        console.log(e)
    }
};