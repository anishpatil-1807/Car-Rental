import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Info, Car, MessageCircleQuestion, Users, Mail, LogIn, UserPlus, Menu } from 'lucide-react';
import logo from "../assets/Logos/Logo.png";

const NavBar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('token') !== null;

  const navItems = [
    { icon: <Home size={24} />, text: "Home", path: "/" },
    { icon: <Info size={24} />, text: "About", path: "/about" },
    { icon: <Car size={24} />, text: "Vehicle Models", path: "/vehicle-models" },
    { icon: <MessageCircleQuestion size={24} />, text: "Testimonials", path: "/testimonials" },
    { icon: <Users size={24} />, text: "Our Team", path: "/our-team" },
    { icon: <Mail size={24} />, text: "Contact", path: "/contact" }
  ];

  // Handle navigation item clicks
  const handleNavClick = (e, path) => {
    // Allow direct navigation to home page
    if (path === "/") return;
    
    // For other pages, check authentication
    if (!isAuthenticated) {
      e.preventDefault();
      navigate('/login');
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-lg z-50 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16">
        {/* Logo and Heading */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="GoVroom Logo" className="h-30 w-30 object-contain" />
          <span className="text-3xl font-bold text-gray-900">GoVroom</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={28} className="text-gray-900" />
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="md:flex space-x-8 items-center relative hidden">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <NavItem 
                icon={item.icon} 
                text={item.text} 
                path={item.path}
                onMouseEnter={() => setHoveredItem(item.text)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={(e) => handleNavClick(e, item.path)}
              />
              {hoveredItem === item.text && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 
                  bg-blue-600 text-white px-3 py-1 rounded-md text-xs 
                  transition-all duration-300 ease-in-out opacity-100 scale-100
                  font-['Roboto'] tracking-wider shadow-lg">
                  {item.text}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Authentication Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {isAuthenticated ? (
            <button 
              onClick={() => {
                localStorage.removeItem('token');
                window.location.href = '/login';
              }}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 
                transition-colors duration-300 font-medium"
            >
              <LogIn size={20} />
              <span>Logout</span>
            </button>
          ) : (
            <>
              <AuthLink icon={<LogIn size={20} />} text="Sign In" path="/login" />
              <AuthLink icon={<UserPlus size={20} />} text="Signup" path="/register" />
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-900 bg-opacity-95 py-4 shadow-lg">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className="py-2 w-full text-center text-white hover:text-blue-300"
              onClick={(e) => {
                setMenuOpen(false);
                handleNavClick(e, item.path);
              }}>
              {item.text}
            </Link>
          ))}
          <div className="flex flex-col items-center mt-4 space-y-2">
            {isAuthenticated ? (
              <button 
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.href = '/login';
                  setMenuOpen(false);
                }}
                className="py-2 w-full text-center text-white hover:text-blue-300"
              >
                Logout
              </button>
            ) : (
              <>
                <AuthLink icon={<LogIn size={20} />} text="Sign In" path="/login" />
                <AuthLink icon={<UserPlus size={20} />} text="Signup" path="/register" />
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable Nav Item Component (updated with onClick handler)
const NavItem = ({ icon, text, path, onMouseEnter, onMouseLeave, onClick }) => (
  <Link 
    to={path}
    className="flex items-center justify-center text-gray-900 hover:text-blue-600 
      transition-colors duration-300 relative group transform hover:scale-110"
    onMouseEnter={onMouseEnter} 
    onMouseLeave={onMouseLeave}
    onClick={onClick}>
    {React.cloneElement(icon, { className: 'transition-transform duration-300 group-hover:rotate-6 text-gray-900' })}
  </Link>
);

// Reusable Auth Link Component (unchanged)
const AuthLink = ({ icon, text, path }) => (
  <Link 
    to={path}
    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 
      transition-colors duration-300 font-medium">
    {icon}
    <span>{text}</span>
  </Link>
);

export default NavBar;