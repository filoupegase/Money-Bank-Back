import React from 'react';
import './header.css';
import BankBankLogo from '../../assets/img/argentBankLogo.png';


const Header = () => {
  return (
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
              className="main-nav-logo-image"
              src={ BankBankLogo }
              alt="Argent Bank Logo"
          />
        </a>
        <div>
          <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle" />
            Sign In
          </a>
        </div>
      </nav>
  );
};

export default Header;