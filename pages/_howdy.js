export default function Howdy() {
	function getText(text, show = false) {
		return (
			<div className="flex justify-center items-center sticky top-1/4">
				<p className="text-6xl font-bold text-white bg-red w-full" style={{ height: "150vh" }}>
					{text}
					{show ? getSocial() : ""}
				</p>
			</div>
		);
	}
	const texts = [
		"I sound awesome eh? Let's talk...",
		"Stop scrolling now...",
		"Well that was it...",
		"So you don't believe me?",
		"C'mon be a good lad... eh?",
		"You now know so much about me...",
		"The books I've read, what I've written..",
		"Even some of those clicks...",
		"What more could you know about someone?",
		"Damn! You don't give up!",
		"Well this was a nice little thing we had...",
		"But you need to let me go now...",
		"Bye..",
		"Seriously stop scrolling down!!",
		"Who's going to give up first?",
		"You or me?",
		"Ohh! I get it...",
		"You want to be my friend...",
		"Sure! Ping me on Instagram",
		"But STOP scrolling",
		"D",
		"O",
		"W",
		"N",
		"What if this all just a ruse?",
		"What if I've just been collecting your data this whole time?",
		"You saw right through one, didn't you?",
		"Now stoooooop scrolllllling.....",
		"Well this is it!",
		"The end",
	];

	function getSocial() {
		return (
			<div className="flex w-1/3 mt-10 justify-between items-center">
				<a className="w-10" href="https://medium.com/@wickedbrat" target="_blank">
					<img src="/img/medium.svg" />
				</a>
				<a className="w-10" href="https://medium.com/@wickedbrat" target="_blank">
					<img src="/img/email.svg" />
				</a>
				<a className="w-10" href="https://medium.com/@wickedbrat" target="_blank">
					<img src="/img/github.svg" />
				</a>
				<a className="w-10" href="https://medium.com/@wickedbrat" target="_blank">
					<img src="/img/facebook.svg" />
				</a>
				<a className="w-10" href="https://medium.com/@wickedbrat" target="_blank">
					<img src="/img/linkedin.svg" />
				</a>
				<a className="w-10" href="https://medium.com/@wickedbrat" target="_blank">
					<img src="/img/twitter.svg" />
				</a>
			</div>
		);
	}
	return (
		<div>
			<div
				className="flex flex-col justify-start pt-20 items-center h-screen"
				style={{ backgroundColor: "antiquewhite" }}
			>
				<p className="font-bold text-4xl">Want to see more of my pics?</p>
				<p className="font-bold text-3xl">
					Visit <a href="https://www.flickr.com/photos/190329325@N03">Flickr</a>
				</p>
			</div>
			<div id="howdy">
				<div className="w-80 m-auto">
					<div>
						{texts.map((message, i) => {
							return getText(message, i === 0);
						})}
					</div>
					<div className="h-screen flex flex-col justify-center items-start">
						<p className="text-6xl font-bold text-white">Tell me on Insta how you liked the experience...</p>
						<p className="text-4xl mt-7 font-bold text-white">And the animations too!</p>
						{getSocial()}
					</div>
				</div>
			</div>
		</div>
	);
}
