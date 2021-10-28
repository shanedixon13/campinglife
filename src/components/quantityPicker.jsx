import React, { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {
	const [quantity, setQuantity] = useState(props.minimum);

	const increase = () => {
		let val = quantity + 1;
		setQuantity(val);
		props.onChange(val); //notify parent that value has changed
	};
	const decrease = () => {
		//dont go below 1
		if (quantity > props.minimum) {
			let val = quantity - 1;
			setQuantity(val);
			props.onChange(val);
		}
	};
	return (
		<div className="quantity-picker">
			<button
				disabled={quantity === props.minimum}
				onClick={decrease}
				className="btn btn-sm btn-primary"
			>
				-
			</button>
			<label>{quantity}</label>
			<button onClick={increase} className="btn btn-sm btn-primary">
				+
			</button>
		</div>
	);
};
export default QuantityPicker;
