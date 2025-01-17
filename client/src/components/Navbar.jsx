import React from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md">
      <div className="container mx-auto py-2 flex items-center justify-between">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-32" />
          </Link>
        </div>
        <div className="links flex items-center gap-4">
          <Link
            className="text-teal-600 hover:text-gray-700 link"
            to="/?cat=art"
          >
            <h6 className="text-base font-light">ART</h6>
          </Link>
          <Link
            className="text-teal-600 hover:text-gray-700 link"
            to="/?cat=science"
          >
            <h6 className="text-base font-light">SCIENCE</h6>
          </Link>
          <Link
            className="text-teal-600 hover:text-gray-700 link"
            to="/?cat=technology"
          >
            <h6 className="text-base font-light">TECHNOLOGY</h6>
          </Link>
          <Link
            className="text-teal-600 hover:text-gray-700 link"
            to="/?cat=cinema"
          >
            <h6 className="text-base font-light">CINEMA</h6>
          </Link>
          <Link
            className="text-teal-600 hover:text-gray-700 link"
            to="/?cat=design"
          >
            <h6 className="text-base font-light">DESIGN</h6>
          </Link>
          <Link
            className="text-teal-600 hover:text-gray-700 link"
            to="/?cat=food"
          >
            <h6 className="text-base font-light">FOOD</h6>
          </Link>
          <Link className="text-teal-600 hover:text-gray-700 link" to="/login">
            Login
          </Link>
          <span className="write bg-white text-teal-600 w-12 h-12 rounded-full flex items-center justify-center border border-white hover:bg-teal-600 hover:text-white hover:border-teal-600">
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
