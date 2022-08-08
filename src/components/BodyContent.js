import React from "react";
import BodyContentDishDetail from "./BodyContentDishDetail";
import BodyContentDishList from "./BodyContentDishList";
import BodyContentShopCart from "./BodyContentShopCart";

function BodyContent() {
  return (
    <div className="body-content row">
      <BodyContentDishList />
      <BodyContentDishDetail />
      <BodyContentShopCart />
    </div>
  );
}

export default BodyContent;
