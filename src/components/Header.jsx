import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/authActions";

// ICONS //
import { IoBagOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <header>
        {/* nav   */}
        <div className="nav container">
          {/* menu icon  */}
          <IoMenuSharp className="menu-icon"></IoMenuSharp>
          {/* logo  */}
          <Link to="/" className="logo">
            Costy
          </Link>
          {/* navbar  */}
          <div className="navbar">
            <Link to="#" className="nav-link">
              Woman
            </Link>
            <Link to="#" className="nav-link">
              Men
            </Link>
            <Link to="#" className="nav-link">
              Kids
            </Link>
            <Link to="#" className="nav-link">
              Accessories
            </Link>
          </div>
          {/* Cart Icon */}
          <div>
            {!isAuthenticated ? (
              <ul className="auth-links d-flex">
                <Link to="/auth" className="account-btn d-flex">
                  Create Account
                </Link>
              </ul>
            ) : (
              <ul className="auth-links d-flex">
                <Link to="#">
                  <IoBagOutline
                    className="cart-icon"
                    data-quantity="0"
                  ></IoBagOutline>
                </Link>
                <Link to="#" className="logout d-flex" onClick={handleLogout}>
                  Logout
                  <FiLogOut className="icon" />
                </Link>
              </ul>
            )}
          </div>
        </div>
      </header>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0px;
  }
  .logo {
    font-size: 1.5rem;
    color: var(--main-color);
    text-transform: uppercase;
    font-weight: 700;
  }
  .navbar {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  .nav-link {
    font-size: 1.25rem;
    color: var(--main-color);
    font-weight: 700;
  }
  .cart-icon {
    position: relative;
    font-size: 1.8rem;
    color: var(--main-color);
    cursor: pointer;
    margin-right: 20px;
  }
  .menu-icon {
    font-size: 28px;
    cursor: pointer;
    color: var(--main-color);
    display: none;
  }
  .auth-links {
    .account-btn {
      font-size: 1rem;
      background-color: var(--main-color);
      color: #fff;
      padding: 10px 15px;
      border-radius: 3px;
      letter-spacing: 3px;
    }
    .logout {
      .icon {
        margin-left: 5px;
      }
    }
    a {
      font-size: 1rem;
      color: var(--main-color);
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;
