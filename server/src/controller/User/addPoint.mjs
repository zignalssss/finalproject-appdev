import { client , db_name} from '../../server.mjs';

export const addPoint = async(req,res) => {
    const { _id, point_enroll } = req.body;

    try{
        await client.connect()
        const findUser = await client.db(db_name).collection("userData").findOne({_id:_id});
        if (!findUser) {
            res.status(401).json({ message: "User not found" });
            console.log("User not found");
            return false;
        }
        const userpoint = findUser.point;
        const newpoint = updatedPoint + userpoint;
        await client.db(db_name).collection("userData").updateOne(
            { _id: _id },
            { $set: { point: newpoint } },
            );
    }catch(e){
        console.log(e)
    }
};