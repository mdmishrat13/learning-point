import React from "react";
import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled,setScrolled] = useState(true)
  const [open, setOpen] = useState(false);

  const changeNavbarColor = () =>{
    if(window.scrollY >= 20){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
 };
 window.addEventListener('scroll', changeNavbarColor);

  return (
    <nav className={scrolled&&'nav__background'}>
      <div className="container nav__container">
        <a href="#">
          {" "}
          <h4>Learning Point</h4>
        </a>
        <ul className='nav__menu'>
          <li>
          <Link to="/home">Home</Link>
          </li>
          <li>
          <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
          <Link to="/about">About Us</Link>
          </li>
        </ul>
        {/* for responsive  */}
        <ul className={open?'nav__menu-responsive':'nav__hide'}>
          <li className="nav__menu-responsive-item">
            <a href="#">Home</a>
          </li>
          <li className="nav__menu-responsive-item">
            <a href="#">Courses</a>
          </li>
          <li className="nav__menu-responsive-item">
            <a href="#">Contact</a>
          </li>
          <li className="nav__menu-responsive-item">
            {/* <Link to="/about">About Us</Link> */}
          </li>
        </ul>
        <button onClick={()=>setOpen(!open)}><i className={open?'uil uil-multiply':'uil uil-bars'}></i></button>
      </div>
    </nav>
  );
};

export default Navbar;
