import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./BottomMenu.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import RoomServiceRoundedIcon from "@mui/icons-material/RoomServiceRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: 8,
    top: 8,
    color: "black",
    fontWeight: "700",
    fontSize: "15px",
    backgroundColor: "yellow",
  },
}));

function BottomMenu() {
  const dishObjectList = useSelector((state) => state.counter.dishList);
  let totalDishCount = 0;
  let totalPrice = 0;
  for (let dishObject of dishObjectList) {
    for (let child of dishObject.dishChildren) {
      totalPrice += child.count * child.dishPrice;
      totalDishCount += child.count;
    }
  }
  const [itemActive, setItemActive] = useState("itemMenu");
  const toggleActive = (e) => {
    const idName = e.currentTarget.id;
    if (itemActive === idName) {
      setItemActive("itemMenu");
    } else {
      setItemActive(idName);
    }
  };
  const toggleCart = () => {
    if ($("#itemCart").hasClass("active")) {
      $(".dish-buy-img").addClass("visible");
      $("body").addClass("overflow-hide");
    } else {
      if ($(".dish-buy-img").hasClass("visible")) {
        $(".dish-buy-img").removeClass("visible");
        $("body").removeClass("overflow-hide");
      }
    }
  };
  const toggleOptions = () => {
    $(".sidebarWrapper").toggleClass("slide-in");
    $("#itemOptions").toggleClass("active");
  };
  useEffect(() => {
    toggleCart();
  });
  return (
    <>
      {totalDishCount > 0 && (
        <div className="totalPriceBar">
          <span>&euro;{totalPrice.toFixed(2)}</span>
          <span style={{ cursor: "pointer" }}>Proceed</span>
        </div>
      )}
      <div className="bottom-menu">
        <ul className="bottom-menu-list">
          <li
            id="itemHome"
            className={`bottom-menu-list-item ${
              itemActive === "itemHome" ? "active" : ""
            }`}
            onClick={toggleActive}
          >
            <HomeRoundedIcon fontSize="large" />
            Home
          </li>
          <li
            id="itemMenu"
            className={`bottom-menu-list-item ${
              itemActive === "itemMenu" ? "active" : ""
            }`}
            onClick={toggleActive}
          >
            <RoomServiceRoundedIcon fontSize="large" />
            Menu
          </li>
          <li
            id="itemCart"
            className={`bottom-menu-list-item ${
              itemActive === "itemCart" ? "active" : ""
            }`}
            onClick={toggleActive}
          >
            <StyledBadge badgeContent={totalDishCount} showZero color="warning">
              <ShoppingCartRoundedIcon fontSize="large" />
            </StyledBadge>
            Cart
          </li>
          <li
            id="itemOptions"
            className="bottom-menu-list-item"
            onClick={toggleOptions}
          >
            <MenuRoundedIcon fontSize="large" />
            Options
          </li>
        </ul>
      </div>
    </>
  );
}

export default BottomMenu;
