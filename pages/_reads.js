import { text_map } from "./_constants";
import getCarSVG, { getLightSVG } from "./_return_car_svg";

export default function Reads() {
	return (
		<div id="reads">
			<div className="h-screen flex justify-center items-center">
				<p className="text-6xl font-bold">Reads</p>
			</div>
			<div className="flex sticky top-0 h-screen overflow-hidden">
				<div
					className="absolute h-28 w-28 bg-yellow rounded-full z-0"
					id="sun"
					style={{ left: "41%", top: "38%" }}
				></div>
				<div className="flex flex-col flex-1 justify-around z-10">
					<div id="readsText" className="cursive text-6xl">
						<p className="text-xl text-center" id="preHeading"></p>
						<p className="text-4xl text-center" id="heading"></p>
						<p className="text-3xl text-center" id="author"></p>
					</div>
					<div className="relative w-80 m-auto my-0">
						{/* Mountain */}
						<div className="absolute bottom-0">
							<img src="/img/mountain.svg" />
						</div>
						<div style={{ marginBottom: "2px" }} className="overflow-hidden relative">
							{/* Car */}
							{getCarSVG("100px")}
							{/* Lights */}
							<div>
								<div id="lightsAnimation" className="flex justify-around mb-1">
									{text_map.map((fence, idx) => {
										if (fence.idx === 999) {
											return;
										}
										return getLightSVG(idx, idx < 5, "50px");
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-screen"></div>
		</div>
	);
}
