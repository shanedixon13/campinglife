import "./cart.css";

const Cart = () => {
	return (
		<div className="cart-page">
			<h1>Ready to Checkout?</h1>
			<div className="cart-main">
				<div className="cart-items"></div>
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
