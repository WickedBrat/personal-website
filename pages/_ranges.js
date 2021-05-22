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
}

function normaliseBetween(scrollPosition, offset = 1, range_from = 0, range_to, animationSpeed = 1) {
	const heightOffset = readsUnitHeight * offset;
	return Math.min(range_to, Math.max(range_from, (scrollPosition / heightOffset - 1) * range_to * animationSpeed));
}

function setCarPosition(scrollPosition) {
	if (car) {
		car.style.left = String(normaliseBetween(scrollPosition, 2, 0, 60, 1)) + "%";
	}
	return 0;
}

function setLightsOpacity(scrollPosition) {
	if (lights1 && lights2 && lights3 && lights4 && lights5) {
		lights1.children[1].style.opacity = normaliseBetween(scrollPosition, 2, 0, 1, 10);
		lights1.children[2].style.opacity = lights1.children[1].style.opacity;

		lights2.children[1].style.opacity = normaliseBetween(scrollPosition, 2.2, 0, 1, 10);
		lights2.children[2].style.opacity = lights2.children[1].style.opacity;

		lights3.children[1].style.opacity = normaliseBetween(scrollPosition, 2.6, 0, 1, 10);
		lights3.children[2].style.opacity = lights3.children[1].style.opacity;

		lights4.children[1].style.opacity = normaliseBetween(scrollPosition, 2.8, 0, 1, 10);
		lights4.children[2].style.opacity = lights4.children[1].style.opacity;

		lights5.children[1].style.opacity = normaliseBetween(scrollPosition, 3.2, 0, 1, 10);
		lights5.children[2].style.opacity = lights5.children[1].style.opacity;
	}
	return 0;
}

function setTextOpacity(scrollPosition) {
	if (readsText) {
		readsText.style.opacity = normaliseBetween(scrollPosition, 1.5, 0, 1, 1);
	}
	return 0;
}

function setBookFold(scrollPosition) {
	if (right_page && right_side && left_side && left_page && blogs) {
		right_side.style.transform =
			"translateY(3px) rotate(" +
			String(normaliseBetween(scrollPosition, 7.5, 0, 90, 5)) +
			"deg)" +
			" skewY(" +
			String(normaliseBetween(scrollPosition, 7.5, 0, 35, 5) * -1) +
			"deg)";

		right_page.style.transform =
			"translateX(" +
			String(normaliseBetween(scrollPosition, 7.5, 0, 90, 5)) +
			"px) rotate(" +
			String(normaliseBetween(scrollPosition, 7.5, 0, 90, 5)) +
			"deg) scale(" +
			String(normaliseBetween(scrollPosition, 7.5, 1, 1.2, 5)) +
			", " +
			String(normaliseBetween(scrollPosition, 7.5, 1, 0.9, 5)) +
			")";

		left_side.style.transform =
			"rotate(" +
			String(normaliseBetween(scrollPosition, 7.5, 0, 90, 5) * -1) +
			"deg)" +
			" skewY(" +
			String(normaliseBetween(scrollPosition, 7.5, 0, 35, 5)) +
			"deg)";

		left_page.style.transform =
			"translateX(" +
			String(normaliseBetween(scrollPosition, 7.5, 0, 90, 5) * -1) +
			"px) rotate(" +
			+String(normaliseBetween(scrollPosition, 7.5, 0, 90, 5) * -1) +
			"deg) scale(" +
			String(normaliseBetween(scrollPosition, 7.5, 1, 1.2, 5)) +
			", " +
			String(normaliseBetween(scrollPosition, 7.5, 1, 0.9, 5)) +
			")";
		blogs.style.opacity = normaliseBetween(scrollPosition, 8, 0, 1, 10);
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
