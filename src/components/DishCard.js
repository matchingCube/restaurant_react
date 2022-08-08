import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../app/counterSlice";

function DishCard(props) {
  const dishObjectList = useSelector((state) => state.counter.dishList);
  const thisCount =
    dishObjectList[props.cateIdx].dishChildren[props.dishIdx].count;
  const dispatch = useDispatch();
  const increaseDishNum = () => {
    dispatch(increment({ cateIdx: props.cateIdx, dishIdx: props.dishIdx }));
  };
  const reduceDishNum = () => {
    dispatch(decrement({ cateIdx: props.cateIdx, dishIdx: props.dishIdx }));
  };
  return (
    <div className="dish-card row">
      <div className="col-sm-9">
        <h6>{props.dishName}</h6>
        <p>{props.dishContent}</p>
        <h6>&euro;{props.dishPrice}</h6>
      </div>
      <div className="col-sm-3">
        <div className="button-group">
          <div className={`incre-decre-group ${thisCount > 0 ? "shown" : ""}`}>
            <button
              type="button"
              className="btn btn-warning btn-slice minus"
              onClick={reduceDishNum}
            >
              <RemoveIcon sx={{ fontSize: 20 }} />
            </button>
            <button type="button" className="btn btn-warning buy-number">
              {thisCount}
            </button>
            <button
              type="button"
              className="btn btn-warning btn-slice plus"
              onClick={increaseDishNum}
            >
              <AddIcon sx={{ fontSize: 20 }} />
            </button>
          </div>
          {thisCount === 0 && (
            <button
              type="button"
              className="btn btn-warning btn-dish"
              onClick={increaseDishNum}
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DishCard;
