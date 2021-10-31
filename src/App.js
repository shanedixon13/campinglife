import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import Home from "./components/home";
import About from "./components/about";
import Catalog from "./components/catalog";
import Footer from "./components/footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Cart from "./components/cart";
import Admin from "./components/admin";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar></NavBar>

				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				<Route path="/catalog" exact component={Catalog} />
				<Route path="/cart" exact component={Cart} />
				<Route path="/admin" exact component={Admin} />

				<Footer></Footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
