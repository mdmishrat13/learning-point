import React from "react";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [scrolled,setScrolled] = useState(true)

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
        <ul className="nav__menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <button className="open-menu-btn"><i className="uil uil-bars"></i></button>
        <button className="close-menu-btn"><i className="uil uil-multiply"></i></button>
      </div>
    </nav>
  );
};

export default Navbar;
