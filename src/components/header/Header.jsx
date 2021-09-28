import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          AI News App
        </Link>
        <div className="name">Name: Vinamra Parashar</div>
      </div>
    </nav>
  );
}
