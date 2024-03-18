import { client, db_name } from '../../server.mjs';
import { uploadImageUser } from '../../utils/UploadImg.mjs';
import { hashPassword } from '../../utils/ManagePassword.mjs';
export const updateData = async (req, res) => {
    try {
        const { id, firstName, lastName, password } = req.body;
        let imageUrl;

        // Check if there's a file attached
        if (req.file) {
            const file = req.file;
            imageUrl = await uploadImageUser(file.buffer);
        }

        const updateFields = {};   
        if (firstName) updateFields.fname = firstName;
        if (lastName) updateFields.lname = lastName;
        if (password) updateFields.password = await hashPassword(password);
        if (imageUrl) updateFields.img = imageUrl;

        const result = await client.db(db_name).collection("userData").findOneAndUpdate(
            { _id: id },
            { $set: updateFields },
            { returnOriginal: false }
        );

        if (result) {
            res.status(200).json({ message: "Update Successful" });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}
