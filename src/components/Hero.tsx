import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
	return (
		<div className="relative min-h-screen">
			<Image
				className="lg:w-[580px] xl:w-[620px] absolute h-auto right-0 top-0 -z-10"
				src={"/hero2.png"}
				width={1000}
				height={600}
				alt="hero bg"
			/>
			<Navbar />
			<div
				className="container
			h-[calc(100vh-120px)] grid items-center"
			>
				<div className="space-y-4 bg-[#ffffff98] w-fit p-4">
					<p className="uppercase font-medium">
						Wide options of choice
					</p>
					<h2 className="font-bold text-4xl sm:text-6xl">
						Delicious <span className="text-accent">food</span>
					</h2>
					<p className="text-gray-700 text-[14px] sm:text-[16px]">
						Delicious food colour, aroma and taste.
						<br />
						What are you waiting for?
					</p>
					<button className="bg-accent px-6 py-4 text-white rounded-2xl text-[14px] sm:text-[16px]">
						View more
					</button>
				</div>
			</div>
		</div>
	);
};
export default Hero;
