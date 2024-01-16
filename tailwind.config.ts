/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	content: ['./src/pages/**/*.{ts,tsx}','./src/components/**/*.{ts,tsx}','./src/views/**/*.{ts,tsx}'],
	purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}', './src/views/**/*.{ts,tsx}'],
	theme: {
		screens: {
			sm: '320px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		colors: {
			purple: colors.purple,
			primary: '#7F56D9',
			'primary-darker': '#6941C6',
			blue: colors.blue,
			white: colors.white,
			gray: colors.gray,
			green: colors.green,
			red: colors.red,
			yellow: colors.yellow,
			sky: colors.sky,
			transparent: colors.transparent,
			orange: colors.orange
		},
		fontFamily: {
			primary: ['Inter', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
}
