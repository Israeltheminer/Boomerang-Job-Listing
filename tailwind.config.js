/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		screens: {
			xl: { max: "1200px" },
			lg: { max: "1024px" },
			md: { max: "675px" },
			sm: { max: "450px" },
			xs: { max: "400px" },
		},
		extend: {},
	},
	plugins: [],
};
