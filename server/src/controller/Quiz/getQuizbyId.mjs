import { client, db_name } from '../../server.mjs';

export const getQuizByID = async (req, res) => {
    try {
        await client.connect();
        const id = parseInt(req.params.id); // Extract the ID from the request parameters
        const database = client.db(db_name);
        const collection = database.collection("quizData"); // Assuming quiz data is stored in "quizData" collection
        
        // Find the quiz with the specified ID
        const data = await collection.findOne({ quizId: id }); // Assuming the field storing the quiz ID is named "quizId"
        if (data) {
            res.json(data);
        } else {    
            res.status(404).send({ message: "Quiz not found!"});
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: "Error occurred while connecting to the database!" });
    }
};
