<script context="module" lang="ts">
	export const load = ({ url }) => {
		const currentRoute = url.pathname;

		return {
			props: {
				currentRoute
			}
		};
	};
</script>

<script lang="ts">
	import '$lib/styles/global.scss';
	import { fade } from 'svelte/transition';
	import { prefetch } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		prefetch('/blog');
	});

	export let currentRoute;
</script>

<header>Hi, I'm a header</header>

{#key currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}

<footer>Hello, I'm the footer.</footer>
