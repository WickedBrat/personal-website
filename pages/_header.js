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
		<header className="flex flex-col items-start justify-center md:container md:mx-auto h-24 sticky top-0 bg-white">
			<div className="slidingVertical">
				<h1
					className={
						"text-4xl cursor-pointer font-bold heading-underline " +
						color_map[head]
					}
				>
					{head.split("-")[0].charAt(0).toUpperCase() +
						head.split("-")[0].slice(1)}
				</h1>
			</div>
		</header>
	);
}
