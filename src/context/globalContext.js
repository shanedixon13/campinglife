import StoreContext from "./storeContext";
import React, { useState } from "react";

const GlobalContext = (props) => {
	const [cart, setCart] = useState([]);
	const [user, setUser] = useState({
		id: 12345,
		name: "Shane Dixon",
		email: "shanedixon13@gmail.com",
	});

	const addProductToCart = (product) => {
		console.log("Adding Prod");
		let copy = [...cart, product];

		setCart(copy);
	};
	const removeProductFromCart = (productId) => {
		console.log("Removing Prod");
	};

	/**left side is the abstract descprition for data/fncs (storeContext)
	 * right side is the implementation for data/fns (globalContext)
	 * when someone calls the abstract, will get the implementation
	 */
	return (
		<StoreContext.Provider
			value={{
				cart: cart,
				user: user,
				addProductToCart: addProductToCart,
				removeProductFromCart: removeProductFromCart,
			}}
		>
			{props.children}
		</StoreContext.Provider>
	);
};

export default GlobalContext;
