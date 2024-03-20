import { client, db_name } from '../../server.mjs';

export const addQuiz = async (req, res) => {
    try {
        const { quizId, quiz } = req.body;

        const quizData = {
            quizId,
            quiz
        };

        await client.connect();
        const db = client.db(db_name);

        // Insert quiz data
        await db.collection("quizData").insertOne(quizData);

        res.status(200).send({ message: "Insert Successfully!" });
    } catch (e) {
        console.log(e);
        res.status(404).send({ message: "Insert Error!" });
    }
};
