import { client , db_name} from '../../server.mjs';
export const addCourse = async(req,res) => {
    try{
        await client.connect()
        await client.db(db_name).collection("courseData").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.status(200).send({message:"Insert Successfully!"});
    }catch(e){
        console.log(e);
        res.status(404).send({message:"Insert Error!"});
    }
}