import "./about.css";
import plant from "./css_backgrounds/plant.jpg";
import flower from "./css_backgrounds/red-flower.jpg";
import lake from "./css_backgrounds/lake-fishing.jpg";
import whiteflowers from "./css_backgrounds/white-flowers.jpg";
import whiteflowers2 from "./css_backgrounds/white-flowers2.jpg";

const About = () => {
	return (
		<div className="about-page">
			<div className="about-side-photo">
				<img src={plant} alt="Skinny Green Plant" />
				<img src={whiteflowers} alt="White Flowers" />
			</div>
			<div className="middle-about">
				<div className="about-message">
					<h1>Our Beginnings</h1>
					<p>
						CampingLife was founded in 2021 by Shane Dixon in hopes
						to cultivate an environment that can be easy for
						everyone from those who are avid adventurers to those
						who have never stepped foot off the concrete.
					</p>
				</div>

				<div className="about-message">
					<h1>Our Mission</h1>
					<p>
						Between the profit-first model of big box stores and the
						endless expanse of high-end to knock-off products, we
						know it can be overwhelming to take the dive into
						exploring the outdoors if you have no prior knowledge.
						We aim to provide the best experience possible with
						knowledgeable associates and weekly online seminars that
						can either get you started, or add to an already growing
						knowledge base.
					</p>
				</div>
				<div className="about-message">
					<h1>Our Guarantee</h1>
					<p>
						If we didn't take care of the people that we depend on
						for our business, we would never expect a customer to
						shop with us. At CampingLife we don't just guarantee the
						products we sell, we guarantee our service. If you do
						not leave our store or our site completely satisfied and
						without questions please take the time to fill out a
						customer survey on paper, on the web, or over the phone
						at (555) 555-5555. As a reward for keeping us honest
						when it comes to your experience, you will receive a
						MINIMUM of 15% off your next order.
					</p>
				</div>
				<img src={lake} alt="Lake with chair on bank" />
			</div>
			<div className="about-side-photo">
				<img src={flower} alt="Red Flower" />{" "}
				<img src={whiteflowers2} alt="White Flowers" />{" "}
			</div>
		</div>
	);
};

export default About;
