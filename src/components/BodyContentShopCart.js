import React from "react";
import "./BodyContentShopCart.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../app/counterSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function BodyContentShopCart() {
	const dishObjectList = useSelector((state) => state.counter.dishList);
	const dispatch = useDispatch();
	let totalPrice = 0;
	for (let dishObject of dishObjectList) {
		for (let child of dishObject.dishChildren) {
			totalPrice += child.count * child.dishPrice;
		}
	}
	return (
		<div className="col-sm-4 sticky-top dish-buy-img">
			<div>
				<h4 className="bottom-border-heading">Your Cart</h4>
			</div>
			{totalPrice === 0 && (
				<div className="shopCart">
					<img src="img/Cart.png" alt="Cart" width="100%" height="100%"></img>
				</div>
			)}
			<div className="cartBill">
				<ul className="onCartDishList">
					{dishObjectList.map((dishCategory, idx) => {
						return dishCategory.dishChildren.map((dishObject, subIdx) => {
							return (
								dishObject.count > 0 && (
									<li className="onCartDishListItem">
										<div className="title">{dishObject.dishName}</div>
										<div className="button-set">
											<button
												type="button"
												className="yellow-color"
												onClick={() => {
													dispatch(
														decrement({ cateIdx: idx, dishIdx: subIdx })
													);
												}}
											>
												<RemoveIcon />
											</button>
											<button type="button" className="black-color">
												{dishObject.count}
											</button>
											<button
												type="button"
												className="yellow-color"
												onClick={() => {
													dispatch(
														increment({ cateIdx: idx, dishIdx: subIdx })
													);
												}}
											>
												<AddIcon />
											</button>
										</div>
										<div className="price">
											&euro;
											{(dishObject.dishPrice * dishObject.count).toFixed(2)}
										</div>
									</li>
								)
							);
						});
					})}
					{totalPrice > 0 && (
						<li id="totalPriceItem" className="onCartDishListItem">
							<span>Total</span>
							<span id="totalPrice">&euro;{totalPrice.toFixed(2)}</span>
						</li>
					)}
				</ul>
			</div>
			{totalPrice > 0 && (
				<div>
					<button type="button" className="btn-checkout">
						Checkout
					</button>
				</div>
			)}
		</div>
	);
}

export default BodyContentShopCart;
