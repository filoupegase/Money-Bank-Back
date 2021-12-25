import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
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
          <Link className="main-nav-item" to="/login">
            <i style={ { paddingRight: 6 } } className="fa fa-user-circle" />
            Sign In
          </Link>
        </div>
      </nav>
  );
};

export default Header;