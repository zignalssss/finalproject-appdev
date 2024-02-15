import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    fname: '',
    lname: '',
    phonenumber: ''
  });
  const [message, setMessage] = useState('');

  //Set data from user input to fromData variable
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  //submit and post data to Database (MongoDB)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5050/api/user/register', formData);
      setMessage('Registration successful!');
      // Optionally, you can redirect the user to another page upon successful registration
      // window.location.href = '/login';
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || 'Registration failed');
      } else {
        setMessage('Registration failed');
      }
    }
  };

  return (
    <div className='text-white flex justify-center'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" className='text-black' name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className='text-black' name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className='text-black' name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="fname">F_name:</label>
          <input type="text" id="fname" className='text-black' name="fname" value={formData.fname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lname">L_name:</label>
          <input type="text" id="lname" className='text-black' name="lname" value={formData.lname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phonenumber">L_name:</label>
          <input type="text" id="phonenumber" className='text-black' name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
        </div>
        <button className= 'btn' type="submit">submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterPage;
