import { AnimatePresence } from "framer-motion";
import "tailwindcss/tailwind.css";
import Footer from "./_footer";
import Header from "./_header";
import "./_style.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			{/* <main className="flex-1 h-screen"> */}
				{/* <AnimatePresence exitBeforeEnter> */}
					<Component {...pageProps} />
				{/* </AnimatePresence> */}
			{/* </main> */}
			<Footer />
		</>
	);
}

export default MyApp;
