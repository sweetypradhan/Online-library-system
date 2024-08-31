import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4O9LT8l136mbDHZjGZP__S2KpaLdemm101Vos5iO-68IufQBnXvLpOUSKemIDYTl76w&usqp=CAU'
          alt="logo" style={{marginTop:"20px", marginBottom:"10px"}}
          width="200px"
          height="50px"
        />

        <ul>
            <Link to="/" style={{textDecoration:"none", color:"black"}}>
            <li>Home</li>
            </Link>

            <Link to="/BrowseBook" style={{textDecoration:"none", color:"black"}}>
            <li>BrowseBook</li>
            </Link>

            <Link to="/AddBook" style={{textDecoration:"none", color:"black"}}>
            <li>AddBook</li>
            </Link>

        </ul>
      </nav>
    </div>
  );
}

export default Header;
