import { client, db_name } from '../../server.mjs';
import { v4 as uuidv4 } from 'uuid';
import { hashPassword } from '../../utils/ManagePassword.mjs';

export const register = async (req, res) => {
    try {
        const { username, password, gmail, fname, lname, phonenumber } = req.body;
        const data = {
            _id: await uuidv4(),
            username,
            password: await hashPassword(password),
            gmail,
            fname,
            lname,
            phonenumber,
            point: 100,
            courses: [],
            F_courses:[],
            img:"https://firebasestorage.googleapis.com/v0/b/appdev-image-storage.appspot.com/o/blank-profile-picture-973460_1280.png?alt=media&token=a724e3e3-8d78-4340-9072-0f6937f789d0"
        };

        // Check if the username is already in use
        const existingUser = await client.db(db_name).collection("userData").findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: "Username is already in use" });
        }

        // Insert the new user data into the database
        await client.db(db_name).collection("userData").insertOne(data);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Registration failed:", error);
        return res.status(500).json({ message: "Registration failed" });
    }
};
