import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
 
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <a class="navbar-brand" href="/">satyakavya varri</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">

           

            <li class="nav-item ">
            <Link className="navbar-brand" to="/contact"> Contact </Link>

            </li>


            <li class="nav-item active">

            <Link className="navbar-brand" to="/about">About </Link>

            </li>
            <li class="nav-item active">

            <Link className="navbar-brand" to="/portfolio"> Portfolio </Link>

            </li>
            <li class="nav-item active">

            <Link className="navbar-brand" to="/project"> Projects </Link>

            </li>
        </ul>
    </div>
</nav>
    
  );
}

export default Navbar;
