import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
	const router = useRouter();
	const k = router.pathname;
	const head = k.split("/")[k.split("/").length - 1];

	const class_map = {
		writings:
			head === "read"
				? "px-3 py-1 link green-color override"
				: "px-3 py-1 link green-color",
		photography:
			head === "read"
				? "px-3 py-1 link blue-color override"
				: "px-3 py-1 link blue-color",
		reads:
			head === "read"
				? "px-3 py-1 link yellow-color override"
				: "px-3 py-1 link yellow-color",
		howdy:
			head === "read"
				? "px-3 py-1 link red-color override"
				: "px-3 py-1 link red-color",
	};

	return (
		<footer className="flex items-center justify-end w-full h-24 fixed right-3 bottom-0 z-20">
			<Link href="#reads">
				<a className={class_map.reads}>reads.</a>
			</Link>
			<Link href="#writings">
				<a className={class_map.writings}>writings.</a>
			</Link>
			<Link href="#photography">
				<a className={class_map.photography}>photography.</a>
			</Link>
			<Link href="#howdy">
				<a className={class_map.howdy}>howdy.</a>
			</Link>
			{/* <Link href="/" className="px-6 py-10">
				<a className="transition-opacity duration-500 ease-in-out opacity-60 hover:opacity-100">
					<img src="/logo.png" width="50px" />
				</a>
			</Link> */}
		</footer>
	);
}
