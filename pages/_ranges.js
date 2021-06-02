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
	return 0;
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

function setCarPosition(scrollPosition) {
	if (elements.car) {
		carPosition = normaliseBetween(scrollPosition, readsOffset + 2, -10, 90, 0.7);
		getReadsText(text_map[changeReadsText(carPosition)]);
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
	return 0;
}

// Photography Animations
function setImageAnimation(scrollPosition) {
	if (elements.blurSlider && elements.focus_center && elements.blurSlider && elements.slider) {
		elements.focus.style.filter = elements.blurSlider.style.filter;
	}
	return 0;
}

export default function applyRangeAnimation(scrollPosition) {
	// Limit applying animation based on scroll position
	setCarPosition(scrollPosition);
	setImageAnimation(scrollPosition);
	return 0;
}
