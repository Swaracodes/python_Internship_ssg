import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main content area */}
      <div className="flex-grow p-4">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
