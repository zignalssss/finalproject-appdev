export const updatePoint = async(req,res) => {
    const itemId = req.params.id;
    const updatedPoint = req.body.point;
    await client.connect()
    await client.db(db_name).collection("userData").updateOne(
        { _id: itemId },
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