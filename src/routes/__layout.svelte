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
	import Navbar from '$lib/components/Navbar.svelte';
	import { darkMode } from '$lib/data/store';

	onMount(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			darkMode.set(true);
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			darkMode.set(false);
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
			document.documentElement.setAttribute('data-theme', 'light');
		}

		prefetch('/blog');
	});

	export let currentRoute;
</script>

<svelte:head>
	<!-- Android  -->
	<meta name="theme-color" content={$darkMode ? '#000000' : '#ffffff'} />
	<meta name="mobile-web-app-capable" content="yes" />

	<!-- iOS -->
	<meta name="apple-mobile-web-app-title" content="Jacob Roling - Web Developer" />
	<meta
		name="apple-mobile-web-app-status-bar-style"
		content={$darkMode ? 'black-translucent' : 'default'}
	/>

	<!-- Windows  -->
	<meta name="msapplication-navbutton-color" content={$darkMode ? '#000000' : '#ffffff'} />
	<meta name="msapplication-TileColor" content={$darkMode ? '#000000' : '#ffffff'} />
	<meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
	<meta name="msapplication-config" content="browserconfig.xml" />

	<!-- Pinned Sites  -->
	<meta name="application-name" content="Jacob Roling - Web Developer" />
	<meta name="msapplication-tooltip" content="Jacob Roling - Web Developer" />
	<meta name="msapplication-starturl" content="/" />

	<!-- Tap highlighting  -->
	<meta name="msapplication-tap-highlight" content="no" />

	<!-- UC Mobile Browser  -->
	<meta name="full-screen" content="yes" />
	<meta name="browsermode" content="application" />

	<!-- Disable night mode for this page  -->
	<meta name="nightmode" content="enable/disable" />

	<!-- Fitscreen  -->
	<!-- <meta name="viewport" content="uc-fitscreen=yes" /> -->

	<!-- Layout mode -->
	<meta name="layoutmode" content="fitscreen/standard" />

	<!-- imagemode - show image even in text only mode  -->
	<meta name="imagemode" content="force" />

	<!-- Orientation  -->
	<meta name="screen-orientation" content="portrait" />
</svelte:head>

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
