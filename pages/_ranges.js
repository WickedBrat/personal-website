import { text_map } from "./_constants";

var reads = null;
var readsUnitHeight = null;

var elements = {
	right_side: null,
	right_page: null,
	left_side: null,
	left_page: null,
	blogs: null,
	preHeading: null,
	heading: null,
	author: null,
	sun: null,
	car: null,
	reads: null,
	readsText: null,
	lights1: null,
	lights2: null,
	lights3: null,
	lights4: null,
	lights5: null,
	lights6: null,
	lights7: null,
	lights8: null,
	slider: null,
	blurSlider: null,
	focus: null,
	focus_center: null,
	img1: null,
};

const readsHeight = 9; // 900vh
const writingsHeight = 5; // 500vh

var readsOffset = 1;
var writingOffset = readsOffset + readsHeight;
var photographyOffset = writingOffset + writingsHeight;
var contactOffset = 1;

export function getAllElementsById() {
	Object.keys(elements).forEach((element) => {
		elements[element] = document.getElementById(String(element));
	});
	reads = document.getElementById("reads");
	readsUnitHeight = reads.scrollHeight / readsHeight;
}

function isWithinOffset(scrollPosition, offset1, offset2) {
	return scrollPosition > readsUnitHeight * offset1 && scrollPosition < readsUnitHeight * offset2;
}

function normaliseBetween(scrollPosition, offset, range_from, range_to, animationSpeed) {
	const heightOffset = readsUnitHeight * offset;
	if (range_from > range_to) {
		[range_from, range_to] = [range_to, range_from];
		return (
			range_to -
			Math.min(range_to, Math.max(range_from, (scrollPosition / heightOffset - 1) * range_to * animationSpeed))
		);
	}
	return Math.min(range_to, Math.max(range_from, (scrollPosition / heightOffset - 1) * range_to * animationSpeed));
}

// Reads Animations
let carPosition = 0;

export function setCarPosition(scrollPosition) {
	if (elements.car) {
		carPosition = normaliseBetween(scrollPosition, readsOffset + 2, -10, 90, 0.7);
		elements.car.style.left = String(carPosition) + "%";
		getReadsText(text_map[changeReadsText(carPosition)]);
	}
	return 0;
}

function setTextOpacity(scrollPosition) {
	if (elements.readsText) {
		elements.readsText.style.opacity = normaliseBetween(scrollPosition, readsOffset + 0.5, 0, 1, 4);
	}
	return 0;
}

function setSunScale(scrollPosition) {
	if (elements.sun) {
		elements.sun.style.transform = "scale(" + String(normaliseBetween(scrollPosition, readsOffset + 1, 1, 22, 1)) + ")";
	}
}
function setLightsOpacity(scrollPosition) {
	if (elements.lights1 && elements.lights2 && elements.lights3 && elements.lights4 && elements.lights5) {
		elements.lights1.children[1].style.opacity = normaliseBetween(scrollPosition, readsOffset + 2.2, 0, 1, 10);
		elements.lights1.children[2].style.opacity = lights1.children[1].style.opacity;

		elements.lights2.children[1].style.opacity = normaliseBetween(scrollPosition, readsOffset + 2.6, 0, 1, 10);
		elements.lights2.children[2].style.opacity = lights2.children[1].style.opacity;

		elements.lights3.children[1].style.opacity = normaliseBetween(scrollPosition, readsOffset + 3.2, 0, 1, 10);
		elements.lights3.children[2].style.opacity = lights3.children[1].style.opacity;

		elements.lights4.children[1].style.opacity = normaliseBetween(scrollPosition, readsOffset + 3.8, 0, 1, 10);
		elements.lights4.children[2].style.opacity = lights4.children[1].style.opacity;

		elements.lights5.children[1].style.opacity = normaliseBetween(scrollPosition, readsOffset + 4.2, 0, 1, 10);
		elements.lights5.children[2].style.opacity = lights5.children[1].style.opacity;
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
	elements.preHeading.innerHTML =
		text.idx === -1 ? "." : text.idx === 999 ? "Currently Reading" : text.idx < 5 ? "Have read" : "Want to read";
	elements.heading.innerHTML = text.name;
	elements.author.innerHTML = text.author;
}

// Writings Animation

function setBookFold(scrollPosition) {
	if (elements.right_page && elements.right_side && elements.right_side && elements.right_page && elements.blogs) {
		const startPosition = writingOffset + 1.5;
		elements.right_side.style.transform =
			"translateY(3px) rotate(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 90, 5)) +
			"deg)" +
			" skewY(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 35, 5) * -1) +
			"deg)";

		elements.right_page.style.transform =
			"translateX(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 90, 5)) +
			"px) rotate(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 90, 5)) +
			"deg) scale(" +
			String(normaliseBetween(scrollPosition, startPosition, 1, 1.2, 5)) +
			", " +
			String(normaliseBetween(scrollPosition, startPosition, 0.89, 0.9, 5)) +
			")";

		elements.left_side.style.transform =
			"rotate(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 90, 5) * -1) +
			"deg)" +
			" skewY(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 35, 5)) +
			"deg)";

		elements.left_page.style.transform =
			"translateX(" +
			String(normaliseBetween(scrollPosition, startPosition, 0, 90, 5) * -1) +
			"px) rotate(" +
			+String(normaliseBetween(scrollPosition, startPosition, 0, 90, 5) * -1) +
			"deg) scale(" +
			String(normaliseBetween(scrollPosition, startPosition, 1, 1.2, 5)) +
			", " +
			String(normaliseBetween(scrollPosition, startPosition, 0.8999, 0.9, 5)) +
			")";
		elements.blogs.style.opacity = normaliseBetween(scrollPosition, writingOffset + 2, 0, 1, 10);
	}
	return 0;
}

// Photography Animations
function setImageAnimation(scrollPosition) {
	isWithinOffset(scrollPosition, photographyOffset, photographyOffset + 3)
		? (elements.blurSlider.style.filter =
				"blur(" + String(normaliseBetween(scrollPosition, photographyOffset + 1, 10, 0, 10)) + "px)")
		: isWithinOffset(scrollPosition, photographyOffset + 3, photographyOffset + 4)
		? (elements.blurSlider.style.filter =
				"blur(" + String(normaliseBetween(scrollPosition, photographyOffset + 2, 0, 2, 10)) + "px)")
		: (elements.blurSlider.style.filter = "blur(0px)");

	if (isWithinOffset(scrollPosition, photographyOffset + 1, photographyOffset + 3.8)) {
		elements.focus_center.style.fill = "red";
	} else {
		elements.focus_center.style.fill = "green";
	}

	elements.focus.style.filter = elements.blurSlider.style.filter;
	elements.focus.style.opacity = normaliseBetween(scrollPosition, photographyOffset + 5, 1, 0, 1000);

	elements.blurSlider.style.transform =
		"scale(" + String(normaliseBetween(scrollPosition, photographyOffset + 5, 0.5, 0.5, 4)) + "px)";
	elements.slider.style.clipPath =
		"circle(" + normaliseBetween(scrollPosition, photographyOffset + 5, 15, 100, 4) + "% at center)";
}

export default function applyRangeAnimation(scrollPosition) {
	// Limit applying animation based on scroll position
	setCarPosition(scrollPosition);
	setTextOpacity(scrollPosition);
	setLightsOpacity(scrollPosition);
	setSunScale(scrollPosition);
	setBookFold(scrollPosition);
	setImageAnimation(scrollPosition);
	return 0;
}
