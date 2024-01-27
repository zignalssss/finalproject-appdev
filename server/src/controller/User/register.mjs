import { client , db_name} from '../../server.mjs';
import { hashPassword } from '../../utils/ManagePassword.mjs';
export const register = async(req,res) =>{
    try{
        const {username,password,gmail,fname,lname} = req.body;
        const data = {
                    username,
                    password:await hashPassword(password),
                    gmail,
                    fname,
                    lname
                }
        await client.connect()
        await client.db(db_name).collection("userData").insertOne(data);
        res.status(200).send(data);
    }catch(e){
        console.log(e);
    }
}