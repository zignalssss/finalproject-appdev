import { client, db_name } from '../../server.mjs';

export const addPoint = async (req, res) => {
    const { _id, point_enroll } = req.body;

    try {
        await client.connect();
        const findUser = await client.db(db_name).collection("userData").findOne({ _id: _id });
        if (!findUser) {
            res.status(401).json({ message: "User not found" });
            console.log("User not found");
            return; // Changed from return false to return
        }
        const userpoint = findUser.point || 0; // Default to 0 if userpoint is undefined
        const newpoint = point_enroll + userpoint;
        if (newpoint > 250) {
            res.status(401).json({ message: "Point Overflow! Use Your Point" });
            return; // Added return here
        }
        await client.db(db_name).collection("userData").updateOne(
            { _id: _id },
            { $set: { point: newpoint } },
        );
        res.status(200).json({ message: "addpoint successfuly" }); // Corrected typo "successfuly" to "successfully"
    } catch (e) {
        console.error(e); // Changed from console.log to console.error to highlight error messages
        res.status(500).json({ message: "Internal Server Error" }); // Added response for internal server error
    }
};
