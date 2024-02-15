export const addCourse = async(req,res) => {
    try{
        const {course_id,courseName,altname,thumbnail_cover,pg,badge,sub_course,sub_course_thumbnail,point_enroll,course_date} = req.body;
        const courseData = {
            course_id,
            courseName,
            altname,
            thumbnail_cover,
            pg,
            badge,
            sub_course,
            sub_course_thumbnail,
            point_enroll,
            course_date
        }
        await client.connect()
        await client.db(db_name).collection("courseData").insertOne(data);
        res.status(200).send({message:"Insert Successfully"});
    }catch(e){
        console.log(e);
    }
}