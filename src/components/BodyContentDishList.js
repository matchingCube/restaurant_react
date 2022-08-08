import React from "react";
import { useSelector } from "react-redux";

function BodyContentDishList() {
  function searchDish() {
    var input, filter, ul, li, a, i, txtval;
    input = document.getElementById("search_dish");
    filter = input.value.toUpperCase();
    ul = document.getElementById("dish_list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtval = a.textContent || a.innerText;
      if (txtval.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  const dishObjectList = useSelector((state) => state.counter.dishList);
  return (
    <div className="col-sm-3 y-scroll sticky-top">
      <input
        type={"search"}
        id="search_dish"
        onKeyUp={searchDish}
        className="form-control"
        placeholder="Search here"
      ></input>
      <nav className="navbar ss_navbar" data-spy="affix" data-offset-top="100">
        <ul className="list-group-dish" id="dish_list">
          {dishObjectList.map((dishObject) => {
            return (
              <li>
                <a href={"#" + dishObject.hrefId}>{dishObject.dishTitle}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default BodyContentDishList;
