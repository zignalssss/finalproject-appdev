import { client , db_name} from '../../server.mjs';

export const updatePoint = async (req, res) => {
    const { _id, point_enroll } = req.body;
    try {
        await client.connect();
        const findUser = await client.db(db_name).collection("userData").findOne({ _id: _id });
        if (!findUser) {
            res.status(401).json({ message: "User not found" });
            console.log("User not found");
            return;
        }
        
        let userpoint = findUser.point || 0; // Default to 0 if userpoint is undefined/null
        
        const newpoint = userpoint - point_enroll;
        if (newpoint <= 0) {
            await client.db(db_name).collection("userData").updateOne(
                { _id: _id },
                { $set: { point: 0 } }
            );
            res.send("Update Point Successfully");
            return;
        }

        await client.db(db_name).collection("userData").updateOne(
            { _id: _id },
            { $set: { point: newpoint } }
        );
        
        res.send("Update Point Successfully");
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};
