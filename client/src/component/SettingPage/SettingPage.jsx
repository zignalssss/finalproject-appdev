// ProfileSettings.js
import React, { useState } from 'react';

const ProfileSettings = () => {
  // Mock user data
  const [user, setUser] = useState({
    username: 'exampleuser',
    email: 'user@example.com',
    avatar: 'https://via.placeholder.com/150',
  });

  // State variables for form inputs
  const [usernameInput, setUsernameInput] = useState(user.username);
  const [emailInput, setEmailInput] = useState(user.email);
  const [avatarInput, setAvatarInput] = useState(user.avatar);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user information
    setUser({
      ...user,
      username: usernameInput,
      email: emailInput,
      avatar: avatarInput,
    });
    // You can send this information to the server here if needed
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
        <div className="flex items-center mb-4">
          <img src={avatarInput} alt="User Avatar" className="w-16 h-16 rounded-full mr-4" />
          <input
            type="text"
            value={avatarInput}
            onChange={(e) => setAvatarInput(e.target.value)}
            placeholder="Avatar URL"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
            <input
              type="text"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
