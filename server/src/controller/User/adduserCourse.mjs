import { client, db_name } from '../../server.mjs';

export const UserCourse = async (req, res) => {
    const { _id, course_id } = req.body;
    try{
        await client.connect();
        const findUser = await client.db(db_name).collection("userData").findOne({ _id: _id });
        
        if (!findUser) {
            res.status(401).json({ message: "User not found" });
            console.log("User not found");
            return false;
        }
        if (findUser.courses.includes(course_id)) {
            res.status(400).json({ message: "Course already exists for this user" });
            console.log("Course already exists for this user");
            return false;
        }
  
        // Using $push to add course_id to the array
        await client.db(db_name).collection("userData").updateOne(
            { _id: _id },
            { $push: { courses: course_id } },
        );
        res.send("Update Successfuly")
    }catch(e){
        console.log(e);
    }
}
