import React, { useState } from 'react';

const ImagePreview = ({ images }) => {
  const [previewImages, setPreviewImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setPreviewImages(imageUrls);
  };

  return (
    <div>
      <input type="file" multiple accept="image/*" onChange={handleImageChange} className="mb-4" />
      <div className="grid grid-cols-3 gap-4">
        {previewImages.map((image, index) => (
          <img key={index} src={image} alt={`preview-${index}`} className="w-full h-32 object-cover rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default ImagePreview;
