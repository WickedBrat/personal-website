import Slider from "react-slick";
import { getBlogs } from "../_constants";
import { getBookSVG } from "../_return_car_svg";

export default function Writings() {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	function getBlogsDivs() {
		var k = [];
		getBlogs().map((blog) => {
			k.push(
				<div key={blog.id}>
					<a className="h-full flex justify-center items-center" href={blog.url} target="_blank">
						<div className="flex flex-col justify-center w-96">
							<p>{blog.date}</p>
							<p className="text-3xl font-bold">{blog.heading}</p>
							<p className="mt-2">
								{blog.description.substring(0, 200)}
								{"..."}
							</p>
							<p className="flex">
								{blog.social.map((icon, idx) => {
									return (
										<img key={idx} src={"/img/" + icon + ".svg"} width="30px" style={{ height: "30px", marginTop: "10px" }} />
									);
								})}
							</p>
						</div>
					</a>
				</div>
			);
		});
		return k;
	}

	return (
		<div id="writings">
			<div className="h-screen flex justify-center items-center">
				<p className="text-6xl font-bold">Writings</p>
			</div>
			<div className="sticky top-5p">
				<div className="flex flex-col justify-center items-center" id="blogs">
					<div style={{ height: "40vh", width: "60%" }}>
						<Slider {...settings}>{getBlogsDivs()}</Slider>
					</div>
				</div>
				{getBookSVG()}
			</div>
		</div>
	);
}
