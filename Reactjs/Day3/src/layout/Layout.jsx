import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top Navbar */}
      <Navbar/>

      {/* Main section: content + cart sidebar */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Main content */}
        <main style={{ flex: 1, padding: '1rem' }}>
          <Outlet />
        </main>

        {/* Cart sidebar */}
        <aside style={{
          width: '300px',
          padding: '1rem',
          backgroundColor: '#f0f0f0',
          borderLeft: '1px solid #ccc',
          height: '100%',
          overflowY: 'auto'
        }}>
          <Cart />
        </aside>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
