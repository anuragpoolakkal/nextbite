import Image from "next/image";
import Dash from "./Dash";

const Feature = () => {
	return (
		<div className="container pt-40">
			<h2 className="text-6xl font-bold">Our</h2>
			<h2 className="text-6xl font-bold pt-2">
				Featured <span className="text-accent">Food</span>
			</h2>
			<p className="pt-10 max-w-[550px] text-gray-700">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
				doloribus ipsum velit, alias enim earum asperiores
				exercitationem, vel consectetur hic maiores veritatis sit
				dolores neque! Suscipit ratione voluptatum ab est?
			</p>

			<Dash />

			<div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
				<div className="w-fit mx-auto self-end">
					<Image
						className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
						src="/grid__1.png"
						width={300}
						height={600}
						alt="grid image"
					/>
					<div className="space-y-4">
						<Dash />
						<h2 className="font-medium text-xl">Shrimp Salad</h2>
						<p className="text-gray-700 text-[14px] xl:text-[16px]">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Distinctio, vel. Explicabo quidem enim
							accusamus, eveniet fugit esse exercitationem
							dignissimos dolor quas tempore beatae totam
							laudantium delectus commodi ipsum magni veniam?
						</p>
					</div>
				</div>

				<div className="w-fit mx-auto">
					<Image
						className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
						src="/grid__2.png"
						width={500}
						height={900}
						alt="grid image"
					/>
					<div className="space-y-4">
						<Dash />
						<h2 className="font-medium text-xl">Baked Apples</h2>
						<p className="text-gray-700 text-[14px] xl:text-[16px]">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Distinctio, vel. Explicabo quidem enim
							accusamus, eveniet fugit esse exercitationem
							dignissimos dolor quas tempore beatae totam
							laudantium delectus commodi ipsum magni veniam?
						</p>
					</div>
				</div>

				<div className="w-fit mx-auto self-end">
					<Image
						className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
						src="/grid__3.png"
						width={300}
						height={600}
						alt="grid image"
					/>
					<div className="space-y-4">
						<Dash />
						<h2 className="font-medium text-xl">
							Cherries Chicken
						</h2>
						<p className="text-gray-700 text-[14px] xl:text-[16px]">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Distinctio, vel. Explicabo quidem enim
							accusamus, eveniet fugit esse exercitationem
							dignissimos dolor quas tempore beatae totam
							laudantium delectus commodi ipsum magni veniam?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Feature;
