import React from "react";

function MainBackground(props) {
  return (
    <div className="main-bg">
      <div className="main-bg-content">
        <div className="container col-sm-6">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <p style={{ color: "rgb(255, 200, 2)" }}>{props.subContent}</p>
          <button type="button" className="btn btn-light">
            PICKUP
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainBackground;
