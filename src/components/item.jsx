import React, { useState, useContext } from "react";
import QuantityPicker from "./quantityPicker";
import StoreContext from "../context/storeContext";
import "./item.css";
const Item = (props) => {
	const [quantity, setQuantity] = useState(props.data.minimum || 1);
	const addProd = useContext(StoreContext).addProductToCart;
	const addToCart = () => {
		let prodForCart = {
			...props.data,
			quantity: quantity,
		};
		addProd(prodForCart);
	};

	const onQuantityChange = (quantity) => {
		console.log("new qnty", quantity);
		setQuantity(quantity);
	};

	const getTotal = () => {
		let total = props.data.price * quantity;
		return total.toFixed(2);
	};
	return (
		<div className="item">
			<div className="image-container">
				<img src={"/images/" + props.data.image} alt="product" />
			</div>
			<h5>{props.data.title || "No Product Name"}</h5>
			<label className="price">${props.data.price.toFixed(2)}</label>
			<label className="total">${getTotal()}</label>
			<div className="controls">
				<QuantityPicker
					minimum={props.data.minimum || 1}
					onChange={onQuantityChange}
				></QuantityPicker>
				<button onClick={addToCart} className="btn btn-sm btn-dark">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default Item;
