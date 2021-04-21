import Head from "next/head";
import Footer from "./_footer";
import Header from "./_header";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center h-screen py-2">
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className="flex flex-col items-center justify-center flex-1 px-20 text-center"></main>

			<Footer />
		</div>
	);
}
