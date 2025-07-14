import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">Mydestination</div>
          <div className="hidden md:flex space-x-6 text-gray-700">
            <Link to="/dashboard" className="hover:text-blue-600">
              DashBoard
            </Link>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
