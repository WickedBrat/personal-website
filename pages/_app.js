import "tailwindcss/tailwind.css";
import Footer from "./_footer";
import "./_style.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
