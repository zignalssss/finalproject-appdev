import { client , db_name} from '../../server.mjs';
export const addCourse = async(req,res) => {
    try{
        const {course_id,courseName,altname,thumbnail_cover,pg,badge,sub_course,sub_name_course,point_enroll} = req.body;
        const data = {
            course_id,
            courseName,
            altname,
            thumbnail_cover,
            pg,
            badge,
            sub_course,
            sub_name_course,
            point_enroll,
        }
        await client.connect()
        await client.db(db_name).collection("courseData").insertOne(data);
        res.status(200).send({message:"Insert Successfully!"});
    }catch(e){
        console.log(e);
        res.status(404).send({message:"Insert Error!"});
    }
}