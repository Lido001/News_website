// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import LoginPage from "./pages/LoginPage";
// import HomePage from "./pages/HomePage";
// import Footer from "./components/Footer";
// import "./styles/global.css";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/home" element={<HomePage />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Navbar />
                <div className="flex flex-col items-center">
                <HomePage />
                </div>
                <Footer/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;


