import React from "react";
import { Link } from "react-router";

function MainNav() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between 
    font-semibold px-8 py-2 rounded-md shadow-amber-50">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/register">Regisret</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default MainNav;
