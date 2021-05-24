import { text_map } from "./_constants";

var reads = null;
var readsUnitHeight = null;
var car = null;
var readsText = null;

var lights1 = null;
var lights2 = null;
var lights3 = null;
var lights4 = null;
var lights5 = null;
var lights6 = null;
var lights7 = null;
var lights8 = null;
var right_side = null;
var right_page = null;
var left_side = null;
var blogs = null;
var preHeading = null;
var heading = null;
var author = null;

var readsOffset = 1;
var writingOffset = readsOffset + 5;
var photographyOffset = writingOffset + 5;
var contactOffset = 1;

export function getAllElementsById() {
	reads = document.getElementById("reads");
	readsUnitHeight = reads.scrollHeight / 5;
	car = document.getElementById("car");
	readsText = document.getElementById("readsText");

	lights1 = document.getElementById("0");
	lights2 = document.getElementById("1");
	lights3 = document.getElementById("2");
	lights4 = document.getElementById("3");
	lights5 = document.getElementById("4");
	lights6 = document.getElementById("5");
	lights7 = document.getElementById("6");
	lights8 = document.getElementById("7");
	lights8 = document.getElementById("7");
	right_side = document.getElementById("right_side");
	right_page = document.getElementById("right_page");
	left_side = document.getElementById("left_side");
	blogs = document.getElementById("blogs");
	preHeading = document.getElementById("preHeading");
	heading = document.getElementById("heading");
	author = document.getElementById("author");
}

function normaliseBetween(scrollPosition, offset, range_from, range_to, animationSpeed) {
	const heightOffset = readsUnitHeight * offset;
	return Math.min(range_to, Math.max(range_from, (scrollPosition / heightOffset - 1) * range_to * animationSpeed));
}

let carPosition = 0;

export function setCarPosition(scrollPosition) {
	if (car) {
		carPosition = normaliseBetween(scrollPosition, readsOffset + 1, -10, 90, 0.7);
		car.style.left = String(carPosition) + "%";
		getReadsText(text_map[changeReadsText(carPosition)]);
	}
	return 0;
}

function setLightsOpacity(scrollPosition) {
	if (lights1 && lights2 && lights3 && lights4 && lights5) {
		lights1.children[1].style.opacity = normaliseBetween(scrollPosition, readsOffset + 1, 0, 1, 10);
		lights1.children[2].style.opacity = lights1.children[1].style.opacity;

		lights2.children[1].style.opacity = normaliseBetween(scrollPosition, readsOffset + 1.2, 0, 1, 10);
		lights2.children[2].style.opacity = lights2.children[1].style.opacity;

		lights3.children[1].style.opacity = normaliseBetween(scrollPosition, readsOffset + 1.6, 0, 1, 10);
		lights3.children[2].style.opacity = lights3.children[1].style.opacity;

		lights4.children[1].style.opacity = normaliseBetween(scrollPosition, readsOffset + 1.8, 0, 1, 10);
		lights4.children[2].style.opacity = lights4.children[1].style.opacity;

		lights5.children[1].style.opacity = normaliseBetween(scrollPosition, readsOffset + 2.2, 0, 1, 10);
		lights5.children[2].style.opacity = lights5.children[1].style.opacity;
	}
	return 0;
}

const bookRange = [
	[0, 7],
	[7, 20],
	[20, 32],
	[32, 45],
	[45, 55],
	[55, 65],
	[65, 70],
	[70, 83],
	[83, 100],
];
function changeReadsText(number) {
	var i = -1;
	var index = -1;
	bookRange.forEach((range) => {
		i++;
		if (number > range[0] && number <= range[1]) {
			index = i;
		}
	});
	return index + 1;
}

function getReadsText(text) {
	preHeading.innerHTML =
		text.idx === -1 ? "." : text.idx === 999 ? "Currently Reading" : text.idx < 5 ? "Have read" : "Want to read";
	heading.innerHTML = text.name;
	author.innerHTML = text.author;
}

function setTextOpacity(scrollPosition) {
	if (readsText) {
		readsText.style.opacity = normaliseBetween(scrollPosition, readsOffset + 0.25, 0, 1, 4);
	}
	return 0;
}

function setBookFold(scrollPosition) {
	if (right_page && right_side && left_side && left_page && blogs) {
		const startPosition = writingOffset + 1.5;
		right_side.style.transform =
			"translateY(3px) rotate(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 90, 5)) +
			"deg)" +
			" skewY(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 35, 5) * -1) +
			"deg)";

		right_page.style.transform =
			"translateX(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 90, 5)) +
			"px) rotate(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 90, 5)) +
			"deg) scale(" +
			String(normaliseBetween(scrollPosition, startPosition, 1, 1.2, 5)) +
			", " +
			String(normaliseBetween(scrollPosition, startPosition, 1, 0.9, 5)) +
			")";

		left_side.style.transform =
			"rotate(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 90, 5) * -1) +
			"deg)" +
			" skewY(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 35, 5)) +
			"deg)";

		left_page.style.transform =
			"translateX(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 90, 5) * -1) +
			"px) rotate(" +
			+String(normaliseBetween(scrollPosition, startPosition, 0, 90, 5) * -1) +
			"deg) scale(" +
			String(normaliseBetween(scrollPosition, startPosition, 1, 1.2, 5)) +
			", " +
			String(normaliseBetween(scrollPosition, startPosition, 1, 0.9, 5)) +
			")";
		blogs.style.opacity = normaliseBetween(scrollPosition, writingOffset + 2, 0, 1, 10);
	}
	return 0;
}

export default function applyRangeAnimation(scrollPosition) {
	setCarPosition(scrollPosition); // Car Position
	setTextOpacity(scrollPosition); // Text Opacity
	setLightsOpacity(scrollPosition);
	setBookFold(scrollPosition);
	return 0;
}
