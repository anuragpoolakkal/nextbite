import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
	return (
		<div className="container pt-40">
			<div className="grid md:grid-cols-3 gap-6">
				<div className="space-y-4">
					<h2 className="text-xl font-bold">About Us</h2>
					<p className="leading-[1.8]">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Eaque, at sapiente! Molestias optio, ab soluta
						repellat incidunt velit. Harum, nobis.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-xl font-bold">The Restaurant</h2>
					<ul className="space-y-2">
						<li>About</li>
						<li>Chefs</li>
						<li>Events</li>
						<li>Contact</li>
					</ul>
				</div>

				<div>
					<div className="flex gap-8 text-accent text-2xl pt-16">
						<FaFacebook />
						<BsTwitter />
						<BsPinterest />
						<FaLinkedinIn />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
