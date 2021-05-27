import Head from "next/head";
import { useEffect, useState } from "react";
import { getAllElementsById, getChangedText } from "./_ranges";
import applyRangeAnimation from "./_ranges";
import Reads from "./sections/_reads";
import Writings from "./sections/_writings";
import Photography from "./sections/_photography";

export default function Home() {
	useEffect(() => {
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
			</Head>
			<div className="flex flex-col items-center justify-center text-white" id="landing">
				<main className="flex flex-col flex-wrap items-center justify-center flex-1 px-20 text-9xl">
					{/* <span className="font-bold">WickedBrat.</span> */}
					<img src="/img/name.svg" width="900px" />

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
			
			<Reads/>
			<Writings/>
			<Photography/>
		</>
	);
}
