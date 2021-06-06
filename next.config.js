const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const imageminMozjpeg = require("imagemin-mozjpeg");

module.exports = withPlugins([
	[
		optimizedImages,
		{
			quality: 55,
		},
	],
	[
		imageminMozjpeg,
		{
			quality: 55,
		},
	],
]);
