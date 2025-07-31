import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Cart from "../components/cart"; // ⚠️ Match exact casing of your file name
import Footer from "../components/Footer";

function Layout() {
  return (
    <div>
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Page Content + Cart Side Panel */}
      <div style={{ display: 'flex' }}>
        {/* Main routed page (Home, AboutUs, etc.) */}
        <main style={{ flex: 1, padding: '1rem' }}>
          <Outlet />
        </main>

        {/* Sidebar Cart */}
        {/* <aside style={{
          width: '300px',
          padding: '1rem',
          backgroundColor: '#f0f0f0',
          borderLeft: '1px solid #ccc',
          height: '100vh',
          overflowY: 'auto'
        }}>
          <Cart />
        </aside> */}
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Layout;
