module.exports = {
	content: [
		"*.{html,js}",
		"public/*.{html,js}",
		"public/**/*.{html,js}",
		"./pages/**/*.{html,js}",
		"./components/**/*.{html,js}",
	],
	theme: {
		fontFamily: {
			poppins: ["poppins"],
			Outfit: ["Outfit"],
		},
		extend: {
			colors: {
				Orange: "hsl(25, 97%, 53%)",
				White: "hsl(0, 0%, 100%)",
				lGrey: "hsl(217, 12%, 63%)",
				mGrey: "hsl(216, 12%, 54%)",
				dBlue: "hsl(213, 19%, 18%)",
				tBlue: "hsl(213, 19%, 28%)",
				vdBlue: "hsl(216, 12%, 8%)",
				pr3softBlue: "hsl(215, 51%, 70%)",
				pr3cyan: "hsl(178, 100%, 50%)",
				pr3mainBG: "hsl(217, 54%, 11%)",
				pr3line: "hsl(215, 32%, 27%)",
				pr3cardBG: "hsl(216, 50%, 16%)",
			},
		},
	},
	plugins: [],
};
