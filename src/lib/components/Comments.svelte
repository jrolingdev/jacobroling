<script lang="ts">
	import { onMount } from 'svelte';

	let utteranceElement;

	const config = {
		src: 'https://utteranc.es/client.js',
		repo: 'jrolingdev/jacobroling',
		label: 'comments',
		crossorigin: 'anonymous',
		theme: 'github-dark',
		async: '',
		'issue-term': 'pathname'
	};

	onMount(() => {
		const utteranceScript = document.createElement('script');

		for (const prop in config) {
			utteranceScript.setAttribute(prop, config[prop]);
		}

		utteranceElement.appendChild(utteranceScript);
	});
</script>

<div class="mx-6 md:mx-auto max-w-screen-md" bind:this={utteranceElement} />
