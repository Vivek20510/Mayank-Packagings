import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Home, Package, Info, Phone } from "lucide-react";

import Contact from "./pages/Contact";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Product", path: "/product", icon: <Package size={18} /> },
    { name: "About Us", path: "/about", icon: <Info size={18} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={18} /> },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <span className="font-bold text-lg text-[#004D40]">
              Mayank Packaging Solutions
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#004D40] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Nav Links */}
          <ul
            className={`${
              menuOpen
                ? "block absolute bg-white top-full left-0 w-full p-4 space-y-2 shadow-md"
                : "hidden"
            } md:flex md:space-x-6 md:items-center md:static md:bg-transparent md:space-y-0`}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-2 px-2 py-2 text-gray-700 hover:text-[#F9A825] transition ${
                    location.pathname === link.path ? "text-[#F9A825] font-semibold" : ""
                  }`}
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Routes */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-[#004D40] text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto text-center px-4">
        <p>&copy; 2022 Mayank Packaging Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

// Router wrapper for useLocation to work
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
