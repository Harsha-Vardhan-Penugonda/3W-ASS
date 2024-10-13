import React, { useState } from 'react';
import ImagePreview from './ImagePreview';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');
  const [socialHandle, setSocialHandle] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('socialHandle', socialHandle);
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    try {
      await axios.post('/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Submission successful!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded-lg">
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700">Social Media Handle</label>
        <input
          type="text"
          value={socialHandle}
          onChange={(e) => setSocialHandle(e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700">Upload Images</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 block w-full p-2"
        />
        <ImagePreview images={images} />
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
