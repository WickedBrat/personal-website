module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				mountain: "url('/img/mountain.png')",
			}),
			keyframes: {
				"transform-left": {
					"0%": {
						transform: "translateX(0px)",
					},
					"100%": {
						transform: "translateX(-15px)",
					},
				},
				"scale-in-out": {
					"0%": {
						transform: "scale(1)",
					},
					"50%": {
						transform: "scale(1.15)",
					},
					"100%": {
						transform: "scale(1)",
					},
				},
			},
			animation: {
				lights: "transform-left 1s linear 1",
				"scale-in-out": "scale-in-out 3s ease-out infinite",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
