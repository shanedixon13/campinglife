import StoreContext from "../context/storeContext";
import { useContext } from "react";
import "./cart.css";
import CartItem from "./cartItem";

const Cart = () => {
	const prodsInCart = useContext(StoreContext).cart;
	return (
		<div className="cart-page">
			<div className="cart-main">
				<div className="cart-items">
					{prodsInCart.map((p) => (
						<CartItem data={p}></CartItem>
					))}
				</div>
				<div className="cart-checkout">
					<div className="cart-info">
						<h3>Your Total:</h3>
					</div>
					<div className="coupon-form">
						<input type="text" placeholder="Coupon Code" />
						<button className="btn-dark">Apply</button>
					</div>
					<div className="payment">
						<button className="btn btn-primary">
							Proceed to Payment
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
