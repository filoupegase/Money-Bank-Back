import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BankBankLogo from '../../assets/img/argentBankLogo.png';
import { logout } from '../../redux_store/callApiFunction';
import './header.css';


const Header = () => {
  const reduxState = useSelector((state) => state);
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
          { reduxState.logged ? (
                  <>
                    <Link to="/profile">
                    <span className="main-nav-item">
                        <i style={ { paddingRight: 6 } } className="fa fa-user-circle" />
                      { reduxState.firstName }
                    </span>
                    </Link>
                    <Link className="main-nav-item"
                          onClick={ () => dispatch(logout()) }
                          to="/"
                    >
                      <i style={ { paddingRight: 6 } } className="fa fa-sign-out" />
                      Sign Out
                    </Link>
                  </>)
              :
              (<>
                <i style={ { paddingRight: 6 } } className="fa fa-user-circle" />
                <Link className="main-nav-item" to="/login">
                  Sign In
                </Link>
              </>)
          }
        </div>
      </nav>
  );
};

export default Header;