import React from 'react';
import logo from '../logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="redes-sociais d-flex">
        <li className="mr-3">
          <a target="_blank" href="https://www.linkedin.com/in/brenolemos/">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>

        <li>
          <a target="_blank" href="https://github.com/brennolemos">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
      <p>Made with ❤️ and React</p>
      <img src={logo} className="logo" alt="Logo Breno Lemos" />
    </footer>
  );
};

export default Footer;
