/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		screens: {
			mobile: '320px',
			tablet: '640px',
			laptop: '1024px',
			desktop: '1280px'
		},
		colors: {
			MainGreen: '#109D58',
			MainBlue: '#4385F3',
			MainYellow: '#FABC05',
			MainRed: '#E94436',
			MainBlack: '#000000',
			MainWhite: '#FFFFFF',
			MainGray: '#696969'
		},
		FontFace: {
			Kanit: ['Kanit', 'sans-serif']
		}
	},
	plugins: []
};
