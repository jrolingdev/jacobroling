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
	import { darkMode } from '$lib/data/store';
	import Navbar from '$lib/components/Navbar.svelte';

	onMount(() => {
		const localDarkMode = localStorage.getItem('darkMode');

		if (localDarkMode) {
			darkMode.set(true);
			document.querySelector('html').classList.add('dark');
		}

		prefetch('/blog');
	});

	export let currentRoute;
</script>

<header>
	<Navbar />
</header>

<div>
	{#key currentRoute}
		<main in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>
			<slot />
		</main>
	{/key}
</div>

<!-- <footer>Hello, I'm the footer.</footer> -->
