import React, { useEffect, useState } from 'react';
import LoadingSpinner from "../Loading/LoadingSpinner";
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../lib/axios';
import AfterNav from '../Navbar/afternavbar';

function App() {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photo, setPhoto] = useState('https://firebasestorage.googleapis.com/v0/b/appdev-image-storage.appspot.com/o/blank-profile-picture-973460_1280.png?alt=media&token=a724e3e3-8d78-4340-9072-0f6937f789d0');
  const [file, setFile] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axiosInstance.get("/api/user/verify");
      setUserInfo(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 500) {
        navigate("/signin");
      }
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const handleFNameChange = (e) => {
    setFName(e.target.value);
  };

  const handleLNameChange = (e) => {
    setLName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('id', userInfo._id);
      formData.append('file', file);
      formData.append('firstName', fname);
      formData.append('lastName', lname);
      formData.append('password', password);

      const response = await axiosInstance.put('/api/user/updateData', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Update user info state with updated data
      alert(response.data.message);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile. Please try again.');
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
    <AfterNav userObj={userInfo} />
    <div className="bg-login_imge min-h-screen pb-24">
      <div className="container mx-auto max-w-3xl ">
        <h1 className="text-2xl font-bold text-white px-6 md:px-0 pt-10 underline underline-offset-8">Account Settings</h1>
        <form onSubmit={handleSubmit} className="mt-8  opacity-95">
          <div className="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
            <div className="w-1/3 bg-gray-100 p-8 hidden md:inline-block">
              <h2 className="font-medium text-md text-gray-700 mb-4 tracking-wide">Profile Info</h2>
              <p className="text-xs text-gray-500">Update your basic profile information such as Email Address, Name, and Image.</p>
            </div>
            <div className="md:w-2/3 w-full">
              <div className="py-8 px-16">
                <label htmlFor="name" className="text-sm text-gray-600">First Name</label>
                <input className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="text" value={fname} onChange={handleFNameChange} name="name" />
              </div>
              <hr className="border-gray-200" />
              <div className="py-8 px-16">
                <label htmlFor="name" className="text-sm text-gray-600">Last Name</label>
                <input className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="text" value={lname} onChange={handleLNameChange} name="name" />
              </div>
              <hr className="border-gray-200" />
              <div className="py-8 px-16">
                <label htmlFor="password" className="text-sm text-gray-600">Password</label>
                <input className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="password" name="password" value={password} onChange={handlePasswordChange} />
              </div>
              <hr className="border-gray-200" />
              <div className="py-8 px-16">
                <label htmlFor="confirmPassword" className="text-sm text-gray-600">Confirm Password</label>
                <input className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
              </div>
              <hr className="border-gray-200" />
              <div className="py-8 px-16 clearfix">
                <label htmlFor="photo" className="text-sm text-gray-600 w-full block">Photo</label>
                <img className="rounded-full w-16 h-16 border-4 mt-2 border-gray-200 float-left" id="photo" src={photo} alt="photo" />
                <div className=" mb-6 bg-gray-200 text-gray-500 text-xs mt-5 ml-3 font-bold px-4 py-2 rounded-lg float-left hover:bg-gray-300 hover:text-gray-600 relative overflow-hidden cursor-pointer">
                  <input type="file" name="photo" onChange={handlePhotoChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" /> Change Photo
                </div>
              </div>
            </div>
          </div>
          <div className="p-16 py-5 bg-gray-300 clearfix rounded-b-lg border-t border-gray-200">
            <p className="float-left text-xs text-gray-500 tracking-tight mt-2">Click on Save to update your Profile Info</p>
            <button type="submit" className="bg-indigo-500 text-white text-sm font-medium px-6 py-2  rounded ml-[350px]">Save</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default App;
