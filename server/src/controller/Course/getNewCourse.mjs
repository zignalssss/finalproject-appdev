import { client, db_name } from '../../server.mjs';

export const getNewCourse = async (req, res) => {
    try {
        await client.connect();

        const database = await client.db(db_name);
        const collection = await database.collection("courseData");

        const data = await collection.find().sort({course_id:-1}).limit(3).toArray();
        res.json(data);
    } catch (e) {
        console.log(e);
        // res.status(404).send({ message: "Error occurred while connecting to the database!" });
    }
};
