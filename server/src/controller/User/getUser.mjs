import { client , db_name, SECRET} from '../../server.mjs';

export const getUser = async (req, res) => {
    const userId = req.query.userId;
    try {
        await client.connect();
        const userData = await client.db(db_name).collection("userData").findOne({ _id: userId});
      res.json(userData);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }