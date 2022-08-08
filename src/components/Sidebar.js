import React from "react";
import "./Sidebar.css";
import $ from "jquery";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";

function Sidebar() {
  let iconSrcList = [
    "img/twitter.svg",
    "img/facebook.svg",
    "img/instagram.svg",
  ];
  const sidebarSlideOut = () => {
    $(".sidebarWrapper").removeClass("slide-in");
    $("#itemOptions").removeClass("active");
  };
  return (
    <div className="sidebarWrapper">
      <div className="sidebarOverlay" onClick={sidebarSlideOut}></div>
      <ul className="sidebar">
        <li>
          <RestaurantRoundedIcon fontSize="large" />
          <span>Restaurant Jannat</span>
        </li>
        <li>
          <EventNoteRoundedIcon fontSize="large" />
          <span>RESERVATION</span>
        </li>
        <li>
          <ContactPhoneRoundedIcon fontSize="large" />
          <span>CONTACT</span>
        </li>
        <li>
          <LanguageRoundedIcon fontSize="large" />
          <span>LANGUAGE</span>
        </li>
        <li>
          <LoginRoundedIcon fontSize="large" />
          <span>LOGIN</span>
        </li>
        <li className="iconGroup">
          <div className="iconSet">
            {iconSrcList.map((iconSrc) => {
              return (
                <a href="void(0)" className="round-icon">
                  <img src={iconSrc} alt="icon"></img>
                </a>
              );
            })}
          </div>
          <p>&copy;2021 Fleksa Terms & Conditions Privacy Policy Imprint</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
