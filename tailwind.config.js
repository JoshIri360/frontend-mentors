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
		},
		extend: {
			colors: {
				Orange: "hsl(25, 97%, 53%)",
				White: "hsl(0, 0%, 100%)",
				lGrey: "hsl(217, 12%, 63%)",
				mGrey: "hsl(216, 12%, 54%)",
				dBlue: "hsl(213, 19%, 18%)",
				vdBlue: "hsl(216, 12%, 8%)",
			},
		},
	},
	plugins: [],
};
