// import autoprefixer from 'autoprefixer';
// import tailwind from 'tailwindcss';
// import tailwindNesting from 'tailwindcss/nesting';
// import tailwindConfig from './tailwind.config';

export default {
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': {},
		tailwindcss: {}, // tailwind(tailwindConfig)
		autoprefixer: {} // autoprefixer()
	}
};
