import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer>
        <div className="container footer__container">
        <div className="footer__items1">
        <ul>
            <h4>Learning Point</h4>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, incidunt!</p></li>
          </ul>
        </div>
        <div className="footer__items2">
        <ul>
            <h4>Permalinks</h4>
            <li><p>Home</p></li>
            <li><p>Courses</p></li>
            <li><p>About us</p></li>
          </ul>
        </div>
        <div className="footer__items3">
          <ul>
            <h4>Primacy</h4>
            <li><p>Privecy Policy</p></li>
            <li><p>Terms and Condition</p></li>
            <li><p>Refund policy</p></li>
          </ul>
        </div>
        <div className="footer__items4">
          <ul>
            <h4>Contact Us</h4>
            <li><p>+8801740261643</p></li>
            <li><p>mdmishrat13@gmail.com</p></li>
            <ul className="footer__icons">
              <li> <i class="uil uil-facebook-f"></i></li>
              <li> <i class="uil uil-youtube"></i></li>
              <li> <i class="uil uil-twitter"></i></li>
              <li> <i class="uil uil-github"></i></li>
            </ul>
          </ul>
        </div>
        </div>
        <p className="footer__copyright">&copy; All Right Reserved by Learning Point</p>
      </footer>
    );
};

export default Footer;