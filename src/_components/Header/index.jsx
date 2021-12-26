import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';
import BankBankLogo from '../../assets/img/argentBankLogo.png';


const Header = () => {
  const token = useSelector((state) => state);
  console.log('token', token)
  const dispatch = useDispatch();

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
          <i style={ { paddingRight: 6 } } className="fa fa-user-circle" />

          <Link className="main-nav-item" to="/login">
            Sign In
          </Link>

        </div>
      </nav>
  );
};

export default Header;