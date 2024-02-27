import { client, db_name } from '../../server.mjs';

export const getCourse = async (req, res) => {
    try {
        await client.connect();

        const database = client.db(db_name);
        const collection = database.collection("courseData");

        const data = await collection.find().toArray();

        res.json(data);
    } catch (e) {
        console.log(e);
        // res.status(404).send({ message: "Error occurred while connecting to the database!" });
    }
};
