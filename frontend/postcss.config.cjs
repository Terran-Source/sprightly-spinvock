const postcssImport = require('postcss-import');
const postcssNesting = require('postcss-nesting');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const tailwindNesting = require('tailwindcss/nesting');

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		postcssImport(),
		tailwindNesting(postcssNesting()),
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer(),
	],
};

module.exports = config;
