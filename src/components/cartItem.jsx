import "./cartItem.css";

const CartItem = (props) => {
	const total = props.data.price * props.data.quantity;
	return (
		<div className="cart-item">
			<div className="cart-image-container">
				<img src={"/images/" + props.data.image} alt="product" />
			</div>
			<div className="item-info">
				<h4>{props.data.title}</h4>
				<label>{props.data.category}</label>
			</div>
			<div className="price-info">
				<label>Price: ${props.data.price}</label>
				<label>Quantity: {props.data.quantity}</label>
				<label>Total: ${total.toFixed(2)}</label>
			</div>
		</div>
	);
};
export default CartItem;
