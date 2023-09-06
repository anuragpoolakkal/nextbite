import Image from "next/image";
import Dash from "./Dash";
import MenuCard from "./MenuCard";

const menuData = [
	{
		img: "/cake.avif",
		title: "Delicious Cake",
		desc: "2x tuna sahimi, 1x noodles",
		price: "$29.50",
	},
	{
		img: "/pizza.jpg",
		title: "Italian Pizza",
		desc: "2x tuna sahimi, 1x noodles",
		price: "$29.50",
	},
	{
		img: "/pizza.jpg",
		title: "Italian Pizza",
		desc: "2x tuna sahimi, 1x noodles",
		price: "$29.50",
	},
	{
		img: "/pizza.jpg",
		title: "Italian Pizza",
		desc: "2x tuna sahimi, 1x noodles",
		price: "$29.50",
	},
	{
		img: "/pizza.jpg",
		title: "Italian Pizza",
		desc: "2x tuna sahimi, 1x noodles",
		price: "$29.50",
	},
	{
		img: "/pizza.jpg",
		title: "Italian Pizza",
		desc: "2x tuna sahimi, 1x noodles",
		price: "$29.50",
	},
	{
		img: "/pizza.jpg",
		title: "Italian Pizza",
		desc: "2x tuna sahimi, 1x noodles",
		price: "$29.50",
	},
	{
		img: "/pizza.jpg",
		title: "Italian Pizza",
		desc: "2x tuna sahimi, 1x noodles",
		price: "$29.50",
	},
];

const Menu = () => {
	return (
		<div className="container mt-40">
			<div className="space-y-4 w-fit mx-auto text-center">
				<h2 className="text-4xl md:text-6xl font-bold">
					Our <span className="text-accent">Menu</span>
				</h2>
				<p className="text-gray-700">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Deleniti, dolore
					<br />
					adipisicing elit. Deleniti, dolore.
				</p>
				<div className="w-fit mx-auto">
					<Dash />
				</div>
			</div>

			<ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
				<li className="bg-accent text-white p-1">Appetizers</li>
				<li>Breakkfast</li>
				<li>Salads</li>
				<li>Meat & Fish</li>
				<li>Soup</li>
				<li>Desert</li>
				<li>Drinks</li>
			</ul>

			<div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
				<div className="w-fit mx-auto">
					<Image
						src="/menu_left.png"
						width={500}
						height={500}
						alt="dish"
					/>
				</div>

				<div className="grid mx-auto gap-4 w-fit sm:grid-cols-2">
					{menuData.map((item, index) => (
						<MenuCard
							key={index}
							img={item.img}
							title={item.title}
							desc={item.desc}
							price={item.price}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
export default Menu;
