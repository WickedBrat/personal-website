import { useEffect, useState } from "react";
import { current_book, text_map } from "../_constants";
import { getChangedText, setCarPosition } from "../_ranges";
import getCarSVG, { getLightSVG } from "../_return_car_svg";

export default function Reads() {
	// const readBooksCount = 5;
	// const [text, setText] = useState({
	// 	name: "A book lets you go on a journey, without moving your feet",
	// 	author: "and here's my journey so far...",
	// 	idx: -1,
	// });

	// let setDisplayText = (e) => {
	// 	e.target.parentNode.id === "car" ? setText(current_book) : setText(text_map[e.target.parentNode.id]);
	// };

	return (
		<div id="reads">
			<div className="h-screen flex justify-center items-center">
				<p className="text-6xl font-bold">Reads</p>
			</div>
			<div className="flex m-auto sticky top-5p" style={{ height: "80vh" }}>
				<div className="flex flex-col flex-1 justify-around">
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
							{getCarSVG("100px", "0%")}
							{/* Lights */}
							<div>
								<div id="lightsAnimation" className="flex justify-around mb-1">
									{text_map.map((fence, idx) => {
										if (fence.idx === 999) {
											return
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
