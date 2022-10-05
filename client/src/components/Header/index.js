import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeLg } from "@fortawesome/free-solid-svg-icons";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div>
      <Link to="/">
        <h1> Gamer
       <span> <FontAwesomeIcon icon={faHomeLg} ></FontAwesomeIcon> </span>
        </h1>
        </Link>
        <nav>
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">My Profile</Link>
              <Link to="/single">My Card</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
