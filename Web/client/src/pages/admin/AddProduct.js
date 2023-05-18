import React, { useState } from 'react';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setIsLoading(true);

    const uploadedImages = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        uploadedImages.push(event.target.result);

        if (uploadedImages.length === files.length) {
          setImages((prevImages) => [...prevImages, ...uploadedImages]);
          setIsLoading(false);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddProduct = () => {
    // Handle add product logic here
    // You can access the product details using the state variables:
    // productName, price, description, and images
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={handleProductNameChange}
      />
      <br />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={handlePriceChange}
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
      <br />
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
      />
      <br />
      {isLoading ? (
        <div>Loading images...</div>
      ) : (
        <div>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Product Image ${index + 1}`} />
          ))}
        </div>
      )}
      <br />
      <button onClick={handleAddProduct}>ADD Product</button>
    </div>
  );
};

export default AddProduct;
