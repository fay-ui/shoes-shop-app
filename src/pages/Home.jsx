
import React, { useEffect, useState } from 'react';

const Home = ()=>{
  const [shoes, setShoes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    size: '',
    color: '',
    price: '',
    stock: '',
    description: '',
    imageUrl: '',
  });

  
  useEffect(() => {
    fetch('http://localhost:3002/shoes')
      .then((response) => response.json())
      .then((data) => setShoes(data))
      .catch((error) => console.error('Error fetching shoes:', error));
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3002/shoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newShoe) => {
        setShoes([...shoes, newShoe]);
        setFormData({
          name: '',
          brand: '',
          size: '',
          color: '',
          price: '',
          stock: '',
          description: '',
          imageUrl: '',
        });
      })
      .catch((error) => console.error('Error adding shoe:', error));
  };

  
  const handleDelete = (id) => {
    fetch(`http://localhost:3002/shoes/${id}`, { method: 'DELETE' })
      .then(() => setShoes(shoes.filter((shoe) => shoe.id !== id)))
      .catch((error) => console.error('Error deleting shoe:', error));
  };

  return (
    <div className="shoe-list">
      <h2>Shoe Collection</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Shoe Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="size"
          placeholder="Size"
          value={formData.size}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleInputChange}
        />
        <button type="submit">Add Shoe</button>
      </form>

      
      <div className="shoe-items">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="shoe-item">
            <h3>{shoe.name}</h3>
            <img
            
            src={shoe.imageUrl} 
            alt={shoe.name}
            style={{ width: '200px', height: 'auto' }}
          />
          
            
            <p>{shoe.description}</p>
            <p>Price: ${shoe.price}</p>
            <p>Stock: {shoe.stock}</p>
            <button onClick={() => handleDelete(shoe.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Home;
