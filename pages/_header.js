import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
	const router = useRouter();
	const k = router.pathname;
	const head = k.split("/")[k.split("/").length - 1];
	const color_map = {
		writings: "green",
		reads: "red",
		photography: "blue",
		howdy: "yellow",
	};
	return (
		<div className="flex flex-col justify-center">
			<Link href="/" className="px-6 py-10">
				<a
					className="transition-opacity duration-1000 ease-in-out opacity-60 hover:opacity-100"
					id="logo"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						width="100"
						height="100"
						viewBox="0 0 640 640"
					>
						<defs>
							<path d="M-2.71 22.5h645.42v638.94H-2.71V22.5z"></path>
							<path
								id="dbCHEy7zV"
								d="M220 600l100-170 110 170 200-350H427.61l94.08-160H130l160 270-70 120L80 250H10l210 350z"
							></path>
							<path id="b90UXwwF" d="M220 140h200L320 300 220 140z"></path>
							<path
								id="bi8cYBLpZ"
								d="M430 470l101.78-170H398.8l-37.6 62.39L430 470z"
							></path>
						</defs>
						<use
							id="big"
							stroke="#000"
							strokeWidth="8"
							xlinkHref="#dbCHEy7zV"
						></use>
						<use
							fill="#fff"
							stroke="#000"
							strokeWidth="8"
							xlinkHref="#b90UXwwF"
						></use>
						<use
							fill="#fff"
							stroke="#000"
							strokeWidth="8"
							xlinkHref="#bi8cYBLpZ"
						></use>
					</svg>
				</a>
			</Link>
			<Link href="/photography">
				<a className="text-9xl font-bold">P</a>
			</Link>
			<Link href="/writings">
				<a className="text-9xl font-bold">B</a>
			</Link>
			<Link href="/reads">
				<a className="text-9xl font-bold">R</a>
			</Link>
			<Link href="/photography">
				<a className="text-9xl font-bold">H</a>
			</Link>
		</div>
	);
}
