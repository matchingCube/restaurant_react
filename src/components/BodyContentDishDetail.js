import React from "react";
import DishCard from "./DishCard";
import { useSelector } from "react-redux";

function BodyContentDishDetail() {
  const dishObjectList = useSelector((state) => state.counter.dishList);
  return (
    <div
      id="dishDetail"
      className="col-sm-5"
      data-spy="scroll"
      data-target=".ss_navbar"
      data-offset="100"
    >
      {dishObjectList.map((dishObject, idx) => {
        return (
          dishObject.dishChildren.length > 0 && (
            <div id={dishObject.hrefId} className="dish-kind">
              <h4 className="sticky-top">{dishObject.dishTitle}</h4>
              {dishObject.dishChildren.map((dishChild, subIdx) => {
                return (
                  <DishCard
                    dishName={dishChild.dishName}
                    dishContent={dishChild.dishContent}
                    dishPrice={dishChild.dishPrice}
                    cateIdx={idx}
                    dishIdx={subIdx}
                  />
                );
              })}
            </div>
          )
        );
      })}
    </div>
  );
}

export default BodyContentDishDetail;
