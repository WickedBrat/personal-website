import "tailwindcss/tailwind.css";
import Footer from "./_footer";
import Header from "./_header";
import "./_style.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<main className="flex flex-col md:container md:mx-auto mb-24">
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
}

export default MyApp;
