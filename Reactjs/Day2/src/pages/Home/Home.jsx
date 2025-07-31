import React, { useState } from 'react';
import About from "../../pages/Home/About";
import Cart from '../../components/cart';

function Home() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="home-container" style={{ display: 'flex' }}>
      <div className="product-section" style={{ flex: 3 }}>
        <About></About>
      </div>

      {showCart && (
        <aside style={{ flex: 1, background: 'blue', padding: '10px' }}>
          <Cart />
        </aside>
      )}
    </div>
  );
}

export default Home;
