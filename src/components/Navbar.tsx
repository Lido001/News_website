// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <nav className={`p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">News World</h1>
//         <div className="flex gap-4">
//           <Link to="/home">Home</Link>
//           <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaBell, FaFire, FaCog, FaSignOutAlt } from "react-icons/fa";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav className="bg-red-500 text-white p-4 shadow-md flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">News World</div>

      {/* Icons aligned to the right */}
      <div className="flex items-center gap-12 ml-auto">
        <Link to="/" className="hover:opacity-75 transition-opacity duration-200">
          <FaHome className="text-white" size={24} />
        </Link>
        <Link to="/notifications" className="hover:opacity-75 transition-opacity duration-200">
          <FaBell className="text-white" size={24} />
        </Link>
        <Link to="/hotnews" className="hover:opacity-75 transition-opacity duration-200">
          <FaFire className="text-white" size={24} />
        </Link>
        <Link to="/settings" className="hover:opacity-75 transition-opacity duration-200">
          <FaCog className="text-white" size={24} />
        </Link>
        
        {/* Logout Button */}
        <button 
          onClick={handleLogout} 
          className="hover:text-white transition-colors duration-200 text-gray-300 ps-8"
        >
          <FaSignOutAlt size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

