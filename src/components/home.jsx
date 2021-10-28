import "./home.css";
import sunrise from "./css_backgrounds/sunrise.jpg";
import night from "./css_backgrounds/night.jpg";

const Home = () => {
	return (
		<div className="home-page">
			<div className="home-small-photo">
				<img src={sunrise} alt="Sunrise" />
			</div>
			<div className="welcome-message">
				<h1>Welcome to CampingLife</h1>
				<p>
					Where you are just a click away from the tools you need for
					your journey.
				</p>
			</div>
			<div className="home-small-photo">
				<img src={night} alt="Night on Lake" />
			</div>
		</div>
	);
};

export default Home;
