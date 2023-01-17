import React, { useContext, useEffect } from "react";
import logoImage from "../Images/logoImage.png";
import { Link, useLocation } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { loading } from "../context/context";

function Header() {
  const { cart } = useContext(loading);

  let location = useLocation();

  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  return (
    <div className="header">
      <div className="header__nav">
        <Link className="header__listItem" to="/">
          <img className="header__logoImage" src={logoImage} alt="" />
        </Link>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search" />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="header__nav--1">
        <ul className="header__list">
          <li>
            <Link className="header__listItem" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header__listItem" to="/about">
              About us
            </Link>
          </li>
          <li>
            <Link className="header__listItem login" to="/login">
              login
            </Link>
          </li>
          <li>
            <Badge className="icon" badgeContent={cart.length} color="primary">
              <Link to="/cart">
                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
              </Link>
            </Badge>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
