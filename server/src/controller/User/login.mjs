import { client , db_name, SECRET} from '../../server.mjs';
import { comparePassword  } from '../../utils/ManagePassword.mjs';
import jwt from 'jsonwebtoken';

export const login = async(req,res) => {
    try{
        const {username,password} = req.body;
        await client.connect()
        const findUser = await client.db(db_name).collection("userData").findOne({username:username});
        if(!findUser){
            res.status(401).json({message : "user no found"});
            console.log("user no found");
            return false;
        }
        const IsMatch = await comparePassword(password,findUser.password);
        if(!IsMatch){
            res.status(401).json({message:"password not match"});
            console.log("password not match");
            return false;
        }
        const payload = { _id:findUser._id ,gmail:findUser.gmail };
        const token = jwt.sign(payload,SECRET, { expiresIn: '1h' });
        res.cookie('token',token ,{ httpOnly:true });
        res.status(200).json({message:"login successfuly"});
        console.log("login successfuly");
    }catch(e){
        console.log(e);
    }
}