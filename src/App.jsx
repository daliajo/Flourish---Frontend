import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Inspiration from "./pages/inspiration.jsx";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import "./styles/global.css";  
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {

  const { theme } = useContext(ThemeContext);

  return (
     <div className={`app-wrapper ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
