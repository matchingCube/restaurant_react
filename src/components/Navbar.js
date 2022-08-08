import React from "react";

function Navbar() {
  const links = [
    {
      id: 1,
      path: "/",
      text: "MENU",
    },
    {
      id: 2,
      path: "/about",
      text: "RESERVATION",
    },
    {
      id: 3,
      path: "*",
      text: "CONTACT",
    },
    {
      id: 4,
      path: "*",
      text: "LOGIN",
    },
  ];
  return (
    <div className="res-navbar fixed-top">
      <div className="res-navbar-container">
        <div className="res-navbar-cc">
          <div className="navbar-brand">
            <a href="void(0)">
              <img
                src="img/logo.png"
                alt="Restaurant Logo"
                className="res-logo"
              ></img>
            </a>
          </div>
          <div className="container">
            <nav className="navbar navbar-expand-sm bg-white navbar-light">
              <ul className="navbar-nav">
                {links.map((link) => {
                  return (
                    <li className="nav-item hover-yellow">
                      <a className="nav-link bold-char" href="void(0)">
                        {link.text}
                      </a>
                    </li>
                  );
                })}
                <div className="user-img">
                  <a className="nav-link" href="void(0)">
                    <img
                      src="img/bird.jpg"
                      alt="User"
                      className="rounded-circle"
                    ></img>
                  </a>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
