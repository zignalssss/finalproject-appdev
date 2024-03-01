import { client , db_name} from '../../server.mjs';

export const updatePoint = async(req,res) => {
    const userId = req.body._id;
    const updatedPoint = req.body.point;
    await client.connect()
    const findUser = await client.db(db_name).collection("userData").findOne({_id:userId});
    updatePoint -= findUser.point;
    await client.db(db_name).collection("userData").updateOne(
        { _id: userId },
        { $set: { point: updatedPoint } },
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error updating item');
            } else {
                res.status(200).send('Item updated successfully');
            }
        }
        );
};