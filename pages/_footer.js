import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex items-center justify-end w-full h-24 fixed right-3 bottom-0 bg-white">
			<Link href="/writings">
				<a className="px-3 py-1 link green-color">writings.</a>
			</Link>
			<Link href="/photography">
				<a className="px-3 py-1 link blue-color">photography.</a>
			</Link>
			<Link href="/reads">
				<a className="px-3 py-1 link red-color">reads.</a>
			</Link>
			<Link href="/howdy">
				<a className="px-3 py-1 link yellow-color">howdy.</a>
			</Link>
			<Link href="/" className="px-6 py-10">
				<a className="transition-opacity duration-500 ease-in-out opacity-60 hover:opacity-100">
					<img src="/logo.png" width="50px" />
				</a>
			</Link>
		</footer>
	);
}
