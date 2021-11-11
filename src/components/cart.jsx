import StoreContext from "../context/storeContext";
import { useContext } from "react";
import "./cart.css";
import CartItem from "./cartItem";
import DataService from "./../services/dataService";

const Cart = () => {
	const prodsInCart = useContext(StoreContext).cart;
	const checkout = () => {
		//create the object
		let order = {
			products: cart,
			userId: 2313,
			coupon: "",
		};

		//send to a service
		let service = new DataService();
		service.submitOrder(ord);

		//send the user to a thank you/confirmation page
		//create a component
		//create a route for it
		//redirect user to that route
	};
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
						<button onClick={checkout} className="btn btn-primary">
							Proceed to Payment
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
