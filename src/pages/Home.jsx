import React, { useEffect, useState } from 'react';

const Home = () => {
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
  const [editingShoeId, setEditingShoeId] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); 

  // Fetch shoes on component mount
  useEffect(() => {
    fetch('https://shoes-shop-app.onrender.com/shoes')
      .then((response) => response.json())
      .then((data) => setShoes(data))
      .catch((error) => console.error('Error fetching shoes:', error));
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit (Add or Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingShoeId) {
      // Update existing shoe
      fetch(`https://shoes-shop-app.onrender.com/shoes/${editingShoeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((updatedShoe) => {
          setShoes(shoes.map((shoe) => (shoe.id === updatedShoe.id ? updatedShoe : shoe)));
          resetForm();
        })
        .catch((error) => console.error('Error updating shoe:', error));
    } else {
      // Add new shoe
      fetch('https://shoes-shop-app.onrender.com/shoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((newShoe) => {
          setShoes([...shoes, newShoe]);
          resetForm();
        })
        .catch((error) => console.error('Error adding shoe:', error));
    }
  };

  // Handle delete button click
  const handleDelete = (id) => {
    fetch(`https://shoes-shop-app.onrender.com/${id}`, { method: 'DELETE' })
      .then(() => setShoes(shoes.filter((shoe) => shoe.id !== id)))
      .catch((error) => console.error('Error deleting shoe:', error));
  };

  // Reset the form
  const resetForm = () => {
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
    setEditingShoeId(null);
  };

  // Handle editing a shoe
  const handleEdit = (shoe) => {
    setFormData({
      name: shoe.name,
      brand: shoe.brand,
      size: shoe.size,
      color: shoe.color,
      price: shoe.price,
      stock: shoe.stock,
      description: shoe.description,
      imageUrl: shoe.imageUrl,
    });
    setEditingShoeId(shoe.id);
  };

  // Handle search term input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter shoes based on the search term
  const filteredShoes = shoes.filter((shoe) =>
    shoe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shoe.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle "Mark as Sold" button click (update stock to 0)
  const handleMarkAsSold = (id) => {
    fetch(`https://shoes-shop-app.onrender.com/shoes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ stock: 0 }),
    })
      .then((response) => response.json())
      .then((updatedShoe) => {
        setShoes(shoes.map((shoe) => (shoe.id === updatedShoe.id ? updatedShoe : shoe)));
      })
      .catch((error) => console.error('Error marking shoe as sold:', error));
  };

  return (
    <div className="shoe-list">
      <h2>Shoe Collection</h2>

      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search shoes..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={() => setSearchTerm('')}>Clear Search</button>
      </div>

      {/* Shoe Form */}
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
        <button type="submit">{editingShoeId ? 'Update Shoe' : 'Add Shoe'}</button>
      </form>

      {/* Shoe Items */}
      <div className="shoe-items">
        {filteredShoes.map((shoe) => (
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
            <button onClick={() => handleEdit(shoe)}>Edit</button>
            <button onClick={() => handleMarkAsSold(shoe.id)}>Mark as Sold</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
