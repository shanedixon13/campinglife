import { useEffect, useState } from "react";
import Item from "./item.jsx";
import "./catalog.css";
import DataService from "../services/dataService";

const Catalog = () => {
	const [itemList, setItemlist] = useState([]);
	const [categories, setCategories] = useState([]);
	const [itemsToDisplay, setItemsToDisplay] = useState([]);

	const loadCatalog = async () => {
		//must use async with await (check dataservice for reasoning)
		let service = new DataService();
		let catalog = await service.getCatalog(); //must use await
		console.log("the data:", catalog);

		//find the list of unique categories
		//**this is now done on the server side instead of client side**
		/*let cats = [];
		for (let i = 0; i < catalog.length; i++) {
			let prod = catalog[i];

			//if the category doesnt exist inside the cats array add it.
			if (!cats.includes(prod.category)) {
				cats.push(prod.category);
			}
		}*/
		//get categories from the server
		let cats = await service.getCategories();

		console.log("unique cats", cats);
		setCategories(cats);
		setItemlist(catalog);
		setItemsToDisplay(catalog);
	};

	const test1 = () => {
		console.log("Test 1");
		let nums = [
			1, 3, 4213, 2873, 456, 1, 23, 5, 346, 875, 345, 123, 345, 123, 2345,
			12, 3, 546, 768, 789,
		];

		// console log an array with the unique numbers

		let unnums = [];
		for (let i = 0; i < nums.length; i++) {
			let num = nums[i];

			if (!unnums.includes(num)) {
				unnums.push(num);
			}
		}
		console.log("unique numbers", unnums);
	};

	const selectFilter = (cat) => {
		console.log("clicked", cat);

		//clear the previous data
		setItemsToDisplay([]);
		//pick from the itemList into itemsToDisplay
		let filtered = [];
		for (let i = 0; i < itemList.length; i++) {
			let prod = itemList[i];
			if (prod.category === cat) {
				filtered.push(prod);
			}
		}
		setItemsToDisplay(filtered);
	};

	useEffect(() => {
		loadCatalog();
		//do something else
		test1();
	}, []);
	return (
		<div className="catalog">
			<div className="filters">
				<button
					onClick={() => setItemsToDisplay(itemList)}
					className="btn btn-sm btn-light"
				>
					All Products
				</button>
				{categories.map((cat) => {
					return (
						<button
							onClick={() => {
								selectFilter(cat);
							}}
							className="btn btn-sm btn-light"
						>
							{cat}
						</button>
					);
				})}
			</div>
			<div className="items">
				{itemsToDisplay.map((prod) => {
					return <Item data={prod}></Item>;
				})}
			</div>
		</div>
	);
};

export default Catalog;
