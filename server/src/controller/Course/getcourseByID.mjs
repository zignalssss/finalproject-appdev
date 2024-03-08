import { client, db_name } from '../../server.mjs';

export const getcourseByID = async (req, res) => {
    try {
        await client.connect();
        const id = parseInt(req.params.id); // Extract the ID from the request parameters
        const database = client.db(db_name);
        const collection = database.collection("courseData");
        
        // Find the course with the specified ID
        const data = await collection.findOne({course_id: id});
        
        if (data) {
            // If course found, send it in the response
            res.json(data);
        } else {
            // If no course found with the given ID, send a 404 response
            res.status(404).send({ message: "Course not found!"});
        }
    } catch (e) {
        console.log(e);
        // If an error occurs, send an error response
        res.status(500).send({ message: "Error occurred while connecting to the database!" });
    }
};
