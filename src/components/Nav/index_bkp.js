import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div>
        <nav className="uk-navbar-container" data-uk-navbar>
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li>
                <Link to="/">{process.env.REACT_APP_APPLICATION_NAME}</Link>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li><Link to="/turns">turns</Link></li>
              <li><Link to="/doctors">doctors</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;