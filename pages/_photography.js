import { getFocusSVG } from "./_return_car_svg";

export default function Photography() {
	function getPlaceholderGallery(radius = 0) {
		return (
			<div className="flex flex-wrap overflow-hidden absolute h-screen" style={{ borderRadius: radius }}>
				<div className="photographyPics overflow-hidden">
					<div className="w-full overflow-hidden my-8">
						<img src={"/photos/img1.jpg"} className="" />
					</div>
					<div className="w-full overflow-hidden my-8">
						<img src={"/photos/img2.jpg"} className="" />
					</div>
					<div className="w-full overflow-hidden my-8">
						<img src={"/photos/img2.jpg"} className="" />
					</div>
				</div>

				<div className="photographyPics overflow-hidden">
					<div className="w-full overflow-hidden my-8">
						<img src={"/photos/img11.jpg"} className="" />
					</div>
					<div className="w-full overflow-hidden my-8">
						<img src={"/photos/img12.jpg"} className="" />
					</div>
					<div className="w-full overflow-hidden my-8">
						<img src={"/photos/img13.jpg"} className="" />
					</div>
					<div className="w-full overflow-hidden my-8">
						<img src={"/photos/img14.jpg"} className="" />
					</div>
				</div>

				<div className="photographyPics overflow-hidden">
					<div className="w-full overflow-hidden my-8">
						<img src={"/photos/img17.jpg"} className="" />
					</div>
					<div className="w-full overflow-hidden my-8">
						<img src={"/photos/img18.jpg"} className="" />
					</div>
					<div className="w-full overflow-hidden my-8">
						<img src={"/photos/img19.jpg"} className="" />
					</div>
					<div className="w-full overflow-hidden my-8">
						<img src={"/photos/img20.jpg"} className="" />
					</div>
				</div>
			</div>
		);
	}
	return (
		<div id="photography">
			<div className="h-screen flex justify-center items-center">
				<p className="text-6xl font-bold">Photography</p>
			</div>
			<div className=" flex flex-col m-auto sticky top-0">
				<div id="slider" className="relative m-auto w-80">
					<canvas className="absolute h-full w-full"></canvas>
					{/* <div style={{ filter: "blur(20px)" }}>{getPlaceholderGallery()}</div>
					<div id="scope">
						
						{getPlaceholderGallery()}
					</div> */}
					<div className="relative">
						<span className="absolute top-0 w-full  z-10" id="focus">
							<div
								className="flex justify-center items-center h-screen"
								style={{ top: "50%", left: "50%", marginTop: "-25px", marginLeft: "-25px" }}
							>
								{getFocusSVG()}
							</div>
						</span>
						<div className="flex flex-wrap overflow-hidden" style={{ filter: "blur(20px)" }}>
							<div className="photographyPics overflow-hidden">
								{[...Array(10)].map((e, i) => {
									return (
										<div className="w-full overflow-hidden my-8" key={i}>
											<img src={"/photos/img" + String(i + 1) + ".jpg"} className="" />
										</div>
									);
								})}
							</div>

							<div className="photographyPics overflow-hidden">
								{[...Array(8)].map((e, i) => {
									return (
										<div className="w-full overflow-hidden my-8" key={i}>
											<img src={"/photos/img" + String(i + 11) + ".jpg"} className="" />
										</div>
									);
								})}
							</div>

							<div className="photographyPics overflow-hidden">
								{[...Array(7)].map((e, i) => {
									return (
										<div className="w-full overflow-hidden my-8" key={i}>
											<img src={"/photos/img" + String(i + 19) + ".jpg"} className="" />
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
