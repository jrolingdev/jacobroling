const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: 'Rubik, sans-serif'
		},
		colors: {
			primary: colors.cyan[500],
			neutral: {
				light: colors.white,
				dark: colors.neutral[900]
			},
			success: colors.emerald[500],
			error: colors.red[500]
		}
	},
	plugins: [],
	darkMode: 'class'
};
