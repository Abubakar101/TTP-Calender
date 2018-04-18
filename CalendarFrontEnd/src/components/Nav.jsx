import React, { Component } from "react";
class Nav extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="black">
          <div className="nav-wrapper">
            {" "}
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <span>Welcome,</span>
              </li>
              <li>
                <a href="#">Human!</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
