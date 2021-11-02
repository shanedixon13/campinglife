import React from "react";

//describes the data that will be saved on the context
export default React.createContext({
	//data
	cart: [],
	user: {},

	//fns that allow to modify data
	addProductToCart: (product) => {},
	removeProductFromCart: (productId) => {},
});
