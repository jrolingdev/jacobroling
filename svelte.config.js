import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
			layout: {
				blog: 'src/routes/blog/_post.svelte'
			}
		})
	],

	kit: {
		adapter: adapter({
			split: false
		})
	}
};

export default config;
