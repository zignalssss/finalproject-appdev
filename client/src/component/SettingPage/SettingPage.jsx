// ProfileSettings.js
import React, { useState } from 'react';

const ProfileSettings = () => {
  // Mock user data
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'user@example.com',
    avatar: 'https://via.placeholder.com/150',
  });

  // State variables for form inputs
  const [firstNameInput, setFirstNameInput] = useState(user.firstName);
  const [lastNameInput, setLastNameInput] = useState(user.lastName);
  const [emailInput, setEmailInput] = useState(user.email);
  const [avatarInput, setAvatarInput] = useState(user.avatar);
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user information
    setUser({
      ...user,
      firstName: firstNameInput,
      lastName: lastNameInput,
      email: emailInput,
      avatar: avatarInput,
    });
    // You can send this information to the server here if needed
    // Reset form inputs
    setPasswordInput('');
    setConfirmPasswordInput('');
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
            <label className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
            <input
              type="text"
              value={firstNameInput}
              onChange={(e) => setFirstNameInput(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
            <input
              type="text"
              value={lastNameInput}
              onChange={(e) => setLastNameInput(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">New Password:</label>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm New Password:</label>
            <input
              type="password"
              value={confirmPasswordInput}
              onChange={(e) => setConfirmPasswordInput(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                // Reset form inputs
                setFirstNameInput(user.firstName);
                setLastNameInput(user.lastName);
                setAvatarInput(user.avatar);
                setPasswordInput('');
                setConfirmPasswordInput('');
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
