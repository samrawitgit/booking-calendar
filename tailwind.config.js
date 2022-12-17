/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js,ts,jsx,tsx}",
		"./src/**/**/*.{html,js,ts,jsx,tsx}",
		"./public/*.{html}",
	],
	theme: {
		extend: {},
		colors: {
			gray: "#667085",
			purple: "#B1B2FF",
			green: "#56C795",
			// Custom
			"main-color": "#1a8fff",
			"text-color": "#777",
			"text-color-light": "#ccc",
			"border-color": "#eee",
			"bg-color": "#f9f9f9",
			"neutral-color": "#fff",
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: ["light"],
	},
};
