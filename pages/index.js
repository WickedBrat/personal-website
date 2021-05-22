import Head from "next/head";
import { useEffect, useState } from "react";
import getCarSVG, { getBookSVG, getLightSVG } from "./_return_car_svg";
import { getAllElementsById } from "./_ranges";
import { getBlogs, current_book, text_map } from "./_constants";
import Slider from "react-slick";
import applyRangeAnimation from "./_ranges";

export default function Home() {
	const [screenHeight, setScreenHeight] = useState(1080);
	const readBooksCount = 5;

	useEffect(() => {
		getAllElementsById();
		window.addEventListener("scroll", (val) => {
			const scrollPosition = val.target.scrollingElement.scrollTop;
			applyRangeAnimation(scrollPosition);
		});
		setScreenHeight(screen.height);
	});

	const [text, setText] = useState({
		name: "A book lets you go on a journey, without moving your feet",
		author: "and here's my journey so far...",
		idx: -1,
	});

	let setDisplayText = (e) => {
		e.target.parentNode.id === "car" ? setText(current_book) : setText(text_map[e.target.parentNode.id]);
	};

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	function getBlogsDivs() {
		var k = [];
		getBlogs().map((blog) => {
			k.push(
				<div>
					<a className="h-full flex justify-center items-center" href={blog.url} target="_blank">
						<div className="flex flex-col justify-center w-96">
							<p>{blog.date}</p>
							<p className="text-3xl font-bold">{blog.heading}</p>
							<p className="mt-2">
								{blog.description.substring(0, 200)}
								{"..."}
							</p>
							<p className="flex">
								{blog.social.map((icon) => {
									return (
										<img src={"/img/" + icon + ".svg"} width="30px" style={{ height: "30px", marginTop: "10px" }} />
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
		<>
			<Head>
				<title>WickedBrat</title>
				<link rel="icon" href="/logo_white.png" />
			</Head>
			<div className="flex flex-col items-center justify-center text-white" id="landing">
				<main className="flex flex-col flex-wrap items-center justify-center flex-1 px-20 text-9xl">
					<span className="font-bold">WickedBrat.</span>
					<p className="text-lg w-3/5 text-center">
						I'm Siddhant Srivastav, currently solving Marketplace problems at Gojek as a Product Developer. I love
						solving problems using technology. Tech is just a tool, what matters is what you build with that tech.
					</p>
				</main>
				<svg
					className="animate-bounce w-6 h-6 text-amber-900 mb-1"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
				</svg>
			</div>

			{/* Reads */}

			<div id="reads">
				<div className="h-screen flex justify-center items-center">
					{/* <p className="text-6xl font-bold">Reads</p> */}
				</div>

				<div className="flex m-auto sticky top-5p" style={{ height: String(screenHeight * 0.8) + "px" }}>
					<div className="flex flex-col flex-1 justify-around">
						<div id="readsText" className="cursive text-6xl">
							<p className="text-xl text-center">
								{text.idx === -1
									? "."
									: text.idx === 999
									? "Currently Reading"
									: text.idx < readBooksCount
									? "Have read"
									: "Want to read"}
							</p>
							<p className="text-4xl text-center">{text.name} </p>
							<p className="text-3xl text-center">{text.author}</p>
						</div>
						<div className="relative w-80 m-auto my-0">
							{/* Mountain */}
							<div className="absolute bottom-0">
								<img src="/img/mountain.svg" />
							</div>
							<div style={{ marginBottom: "5px" }}>
								{/* Car */}
								{getCarSVG("100px", "0%", setDisplayText)}
								{/* Lights */}
								<div className="overflow-hidden">
									<div id="lightsAnimation" className="flex justify-around">
										{text_map.map((fence, idx) => {
											return getLightSVG(idx, idx < 5, "50px", setDisplayText);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="h-screen"></div>
			</div>

			<div id="writings">
				<div className="h-screen flex justify-center items-center">
					{/* <p className="text-6xl font-bold">Writings</p> */}
				</div>
				<div className="sticky top-0">
					<div className="flex flex-col justify-center items-center" id="blogs">
						<div style={{ height: "40vh", width: "60%" }}>
							<Slider {...settings}>{getBlogsDivs()}</Slider>
						</div>
					</div>
					{getBookSVG()}
				</div>
			</div>

			<div id="photography"></div>
			<div id="howdy">
				<div className="flex m-auto sticky top-0">
					<img src="/img/howdy.svg" className="m-auto" />
				</div>
			</div>
		</>
	);
}
