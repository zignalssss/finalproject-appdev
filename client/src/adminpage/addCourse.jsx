import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [formData, setFormData] = useState({
    course_id: '',
    courseName: '',
    altname: '',
    thumbnail_cover: '',
    pg: '',
    badge: '',
    sub_course: [],
    sub_course_thumbnail: [],
    point_enroll: '',
    course_date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('your_api_endpoint', formData);
      console.log(response.data); // Assuming your API returns some data
      // Optionally, reset the form after successful submission
      setFormData({
        course_id: '',
        courseName: '',
        altname: '',
        thumbnail_cover: '',
        pg: '',
        badge: '',
        sub_course: '',
        sub_course_thumbnail: '',
        point_enroll: '',
        course_date: ''
      });
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <>
     <form className="flex flex-col gap-y-5"onSubmit={handleSubmit}>
      <input type="text" name="course_id" value={formData.course_id} onChange={handleChange} placeholder="Course ID" />
      <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} placeholder="Course Name" />
      <input type="text" name="altname" value={formData.altname} onChange={handleChange} placeholder="Alternate Name" />
      <input type="text" name="thumbnail_cover" value={formData.thumbnail_cover} onChange={handleChange} placeholder="thumbnail_cover" />
      <input type="text" name="pg" value={formData.pg} onChange={handleChange} placeholder="pg" />
      <input type="text" name="badge" value={formData.badge} onChange={handleChange} placeholder="badge" />
      <input type="text" name="sub_course" value={formData.sub_course} onChange={handleChange} placeholder="sub_course" />
      <input type="text" name="sub_course_thumbnail" value={formData.ub_course_thumbnail} onChange={handleChange} placeholder="ub_course_thumbnail" />
      <input type="text" name="point_enroll" value={formData.point_enroll} onChange={handleChange} placeholder="point_enroll" />
      <input type="text" name="course_date" value={formData.altname} onChange={handleChange} placeholder="course_date" />

      <button className='btn'type="submit">Submit</button>
    </form>
    </>
 
  );
};

export default AddCourse;
