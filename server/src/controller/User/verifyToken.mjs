import { client , db_name, SECRET} from '../../server.mjs';
import jwt from 'jsonwebtoken';
export const verifyToken = async(req, res) => {
    try{
      const Token = req.cookies.token ;
      const verify_Token = jwt.verify(Token,SECRET);
      await client.connect();    
      const userData = await client.db(db_name).collection("userData").findOne({ _id: verify_Token._id});
      if(!userData){
        return res.status(404).json({
          message: "User not found"
        })
      }

      return res.status(200).send(userData);
    }catch(e){
      console.log(e);
      return res.status(500).send({message:"verify Failed!"});;
    }
  }
