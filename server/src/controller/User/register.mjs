import { client , db_name} from '../../server.mjs';
import { v4 as uuidv4 } from 'uuid';
import { hashPassword } from '../../utils/ManagePassword.mjs';
export const register = async(req,res) =>{
    try{
        const {username,password,gmail,fname,lname,phonenumber} = req.body;
        const data = {
                    _id:await uuidv4(),
                    username,
                    password:await hashPassword(password),
                    gmail,
                    fname,
                    lname,
                    phonenumber,
                    point:100
                }
        await client.connect()
        await client.db(db_name).collection("userData").insertOne(data);
        res.status(200).send(data);
    }catch(e){
        console.log(e);
    }
}