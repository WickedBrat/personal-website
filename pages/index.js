import Head from "next/head";
import { useEffect } from "react";
import { getAllElementsById } from "./_ranges";
import Reads from "./_reads";
import Writings from "./_writings";
import Photography from "./_photography";
import applyRangeAnimation from "./_ranges";
import ScrollBound from "scroll-bound-animation";
import Howdy from "./_howdy";
var data = require("./animation.json");

export default function Home() {
	useEffect(() => {
		new ScrollBound(data);

		getAllElementsById();
		window.addEventListener("scroll", (val) => {
			const scrollPosition = val.target.scrollingElement.scrollTop;
			applyRangeAnimation(scrollPosition);
		});
	});

	return (
		<>
			<Head>
				<title>WickedBrat</title>
				<link rel="icon" href="/logo_white.png" />
				<meta name="generator" content="Hugo 0.74.3" />
				<title>Siddhant Srivastav</title>

				<meta charset="UTF-8" />
				<meta name="language" content="en" />
				<meta
					name="description"
					content="A place on the internet just for knowing Siddhant better! Learn more about me here..."
				/>
				<meta
					name="keywords"
					content="wicked , brat , wickedbrat , Siddhant Srivastav , Gojek , Engineer , Product , Tech , Personal , Website"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="content-type" content="text/html; charset=utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="" />
				<meta
					name="twitter:description"
					content="A place on the internet just for knowing Siddhant better! Learn more about me here..."
				/>
				<meta name="twitter:site" content="https://twitter.com/siddhantsme" />
				<meta name="twitter:creator" content="https://twitter.com/siddhantsme" />
				<link
					rel="alternate"
					type="application/rss+xml+xml"
					href="https://wickedbrat.com/index.xml"
					title="Siddhant Srivastav"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `{ 
								"@context": "http://schema.org", 
								"@type": "WebSite", 
								"url": "https:\/\/wickedbrat.com\/",
								"name": "",
								"author": {
									"@type": "Person",
									"name": ""
								},
								"description": "A place on the internet just for knowing Siddhant better! Learn more about me here..."
							}`,
					}}
				></script>

				<script
					type="application/javascript"
					dangerouslySetInnerHTML={{
						__html: `var doNotTrack = false;
	if (!doNotTrack) {
		window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
		ga('create', 'UA-130399233-1', 'auto');
		
		ga('send', 'pageview');
	}`,
					}}
				></script>
				<script async="" src="https://www.google-analytics.com/analytics.js"></script>
			</Head>
			<div className="flex flex-col items-center justify-center text-white" id="landing">
				<main className="flex flex-col flex-wrap items-center justify-center flex-1 px-20 text-9xl">
					{/* <span className="font-bold">WickedBrat.</span> */}
					<img src="/img/name.svg" width="900px" />

					<p className="text-lg w-3/5 text-center">
						I'm Siddhant Srivastav, currently solving Marketplace problems at Gojek as a Product Developer. I love
						solving problems using technology.{" "}
						<span className="heading-underline yellow">
							Tech is just a tool, what you build with it matters the most.
						</span>
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

			<Reads />
			<Writings />
			<Photography />
			<Howdy />
		</>
	);
}
