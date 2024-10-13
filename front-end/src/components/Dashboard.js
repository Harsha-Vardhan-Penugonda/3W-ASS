import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/admin/dashboard')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching data!", error));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">User Submissions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">Social Media Handle: {user.socialHandle}</p>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {user.images.map((image, index) => (
                <img key={index} src={image} alt="Uploaded" className="w-full h-24 object-cover rounded-md" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
