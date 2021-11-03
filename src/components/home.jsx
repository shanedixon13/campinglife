import "./home.css";
import sunset from "./css_backgrounds/sunrise.jpg";
import yellow from "./css_backgrounds/yellow-mushroom.jpg";
import lakedegray from "./css_backgrounds/lake-degray.jpg";
import whiteflower from "./css_backgrounds/white-flower.jpg";
import leaf from "./css_backgrounds/raindrop-leaf.jpg";
import roundmushroom from "./css_backgrounds/round-yellow-mushroom.jpg";
import kayak from "./css_backgrounds/kayak.JPG";
import talltrees from "./css_backgrounds/tall-trees.jpg";
import turtle from "./css_backgrounds/turtle.jpg";
import fallentree from "./css_backgrounds/fallen-tree.jpg";
import cove from "./css_backgrounds/lake-cove.jpg";
import creek from "./css_backgrounds/creek.jpg";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home-page">
			<div className="home-side-photo">
				<img
					src={roundmushroom}
					alt="Small Round-Topped Yellow Mushroom"
				/>
				<img src={whiteflower} alt="White Flower" />
				<img src={kayak} alt="Kayak on River" />
				<img src={talltrees} alt="Tall Trees" />
			</div>
			<div className="middle-home">
				<div className="welcome-message">
					<h1>Welcome to CampingLife</h1>
					<p>
						Where you are just a click away from the tools you need
						for your journey.
					</p>
					<Link className="btn btn-dark" to="/catalog">
						Browse Our Catalog
					</Link>
				</div>
				<img src={lakedegray} alt="Lakeside View" />
				<img src={cove} alt="Lake Cove" />
				<img src={creek} alt="Creek" />
				<img src={sunset} alt="Sunset" />
			</div>
			<div className="home-side-photo">
				<img src={yellow} alt="Yellow Flat Mushroom" />
				<img src={leaf} alt="Raindrops on Leaf" />
				<img src={turtle} alt="Turtle in Water" />
				<img src={fallentree} alt="Large Fallen Tree" />
			</div>
		</div>
	);
};

export default Home;
