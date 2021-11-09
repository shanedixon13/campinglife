import "./admin.css";
import { useState } from "react";
import DataService from "./../services/dataService";

const Admin = () => {
	const [product, setProduct] = useState({});

	const textChange = (event) => {
		//console.log("Text Changed", event.target.value);
		let value = event.target.value;
		let name = event.target.name;

		if (name === "price" || name === "discount" || name === "minimum") {
			value = parseFloat(value); //can also use =value *1 or =+value
		}
		//create the state
		let prod = { ...product };
		prod[name] = value;

		setProduct(prod);
	};

	const handleSave = () => {
		console.log(product);

		//create an instance of the service
		let service = new DataService();
		//call service.saveProduct(product)
		service.saveProduct(product);
	};
	const couponSave = () => {
		console.log("Coupon Saved");
	};

	return (
		<div className="admin-page">
			<h1>Admin</h1>
			<div className="forms">
				<div className="product-form">
					<h3>Register New Product</h3>
					<div className="form-items">
						<label>Title: </label>
						<input
							name="title"
							onChange={textChange}
							type="text"
							placeholder="Title"
						/>
					</div>

					<div className="form-items">
						<label>Price: </label>
						<input
							name="price"
							onChange={textChange}
							type="number"
							placeholder="4.99"
						/>
					</div>

					<div className="form-items">
						<label>Stock: </label>
						<input
							name="stock"
							onChange={textChange}
							type="number"
							placeholder="25"
						/>
					</div>

					<div className="form-items">
						<label>Image Name: </label>
						<input name="image" onChange={textChange} type="text" />
					</div>

					<div className="form-items">
						<label>Minumum Purchase: </label>
						<input
							name="minimum"
							onChange={textChange}
							type="number"
							placeholder="5"
						/>
					</div>

					<div className="form-items">
						<label>Category: </label>
						<input
							name="category"
							onChange={textChange}
							type="text"
							placeholder="Hiking"
						/>
					</div>
					<button onClick={handleSave} className="btn btn-primary">
						Register Product
					</button>
				</div>
				<div className="coupon-form">
					<h3>Register New Coupon</h3>
					<div className="form-items">
						<label>Code</label>
						<input type="text" />
					</div>
					<div className="form-items">
						<label>Discount</label>
						<input type="number" />
					</div>
					<button onClick={couponSave} className="btn btn-primary">
						Register Coupon
					</button>
				</div>
			</div>
		</div>
	);
};

export default Admin;
