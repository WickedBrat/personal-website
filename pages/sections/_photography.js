import { images } from "../_constants";
import { getFocusSVG } from "../_return_car_svg";

export default function Photography() {
	return (
		<div id="photography">
			<div className="h-screen flex justify-center items-center">
				<p className="text-6xl font-bold">Photography</p>
			</div>
			<div className=" flex flex-col m-auto sticky top-0 h-screen">
				{/* <img src="/img/tes .t.jpg" id="slider" /> */}
				<div id="slider" className="relative w-full bg-white">
					<div className="flex overflow-y-hidden overflow-x-scroll" id="blurSlider">
						{images.map((image) => {
							return (
								<img
									key={image}
									id={image}
									src={"/photos/" + image + ".jpg"}
									style={{ height: "80vh", width: "auto", margin: "10vh" }}
								/>
							);
						})}
					</div>
					<div
						className="absolute"
						style={{ top: "50%", left: "50%", marginTop: "-25px", marginLeft: "-25px" }}
						id="focus"
					>
						{getFocusSVG()}
					</div>
				</div>
				<div className="flex justify-center items-center">
					<p>Sometimes... All we need is a little clarity</p>
				</div>
			</div>
		</div>
	);
}
