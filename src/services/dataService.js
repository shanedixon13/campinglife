import axios from "axios"; //npm -i -s axios

var catalog = [
	{
		_id: "3452345nkj12345jkn;23q45", //random
		title: "Boots",
		image: "boots.jpg",
		price: 115.45,
		category: "Footwear",
		stock: 34,
		minimum: 1,
	},
	{
		_id: "3452asdf2345jkn;23q45", //random
		title: "Treking Poles",
		image: "trekingpoles.jpg",
		price: 15.0,
		category: "Hiking",
		stock: 40,
		minimum: 2,
	},
	{
		_id: "3452345asdfabgern;23q45", //random
		title: "Family Tent",
		image: "familytent.jpg",
		price: 250.0,
		category: "Tents",
		stock: 45,
		minimum: 1,
	},
	{
		_id: "3452345n3456hsbreg45jkn;23q45", //random
		title: "Head Lamp",
		image: "headlamp.jpg",
		price: 45.95,
		category: "Lighting",
		stock: 34,
		minimum: 1,
	},
	{
		_id: "3452asdf278478fgsdhsrth;23q45", //random
		title: "Camping Kitchen Set",
		image: "campkitchenset.jpeg",
		price: 65.2,
		category: "Camp Kitchen",
		stock: 40,
		minimum: 1,
	},
	{
		_id: "3452345as2346hsbgern;23q45", //random
		title: "Sleeping Bag",
		image: "sleepingbag.jpg",
		price: 50.99,
		category: "Sleep",
		stock: 45,
		minimum: 1,
	},
];

class DataService {
	serverURL = "http://127.0.0.1:5000"; //typically used to make deployment easier via changing one line
	async getCatalog() {
		//must add async to use await (async/await technique)
		//call the server to get the catalog
		let res = await axios.get("http://127.0.0.1:5000/api/catalog"); //await holds the execution until responce, (will not exevute lower lines)
		console.log(res);
		return res.data; //= an array of objects
		//return mock data(temporal)
		//return catalog;
	}

	async submitOrder(order) {
		let res = await axios.post("http://127.0.0.1:5000/api/order", order);
		console.log("Result of saving order: ", res.data);
	}

	//get categories
	//http://127.0.0.1:5000/api/categories
	async getCategories() {
		let res = await axios.get("http://127.0.0.1:5000/api/categories");
		console.log(res);
		return res.data;
	}

	async saveProduct(prod) {
		let res = await axios.post("http://127.0.0.1:5000/api/catalog", prod);
		console.log("saving result", res.data);
		return res.data;
	}
	saveItem() {}
	saveOrder() {}
}

export default DataService;
