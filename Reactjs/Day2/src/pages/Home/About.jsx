import React, { useEffect, useState } from 'react';
import axios from 'axios';

function About() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log("Full API Response:", response.data); // Check the structure
        setProducts(response.data); // adjust if structure is different
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.map((prod) => (
        <div
          key={prod.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            width: '250px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
            <img
              src={prod.image}
              alt={prod.title}
              style={{ height: '150px', objectFit: 'contain', marginBottom: '10px' }}
            />
          <h3 style={{ fontSize: '16px', marginBottom: '8px', textAlign: 'center' }}>{prod.title}</h3>
          <p style={{ fontWeight: 'bold', marginBottom: '6px' }}>₹{prod.price}</p>
        </div>
      ))}
    </div>
  );
}

export default About;
