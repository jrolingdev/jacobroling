<script lang="ts">
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import { darkMode } from '$lib/data/store';

	const links = [
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'Blog',
			href: '/blog'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	];

	let menuOpen = false;

	function toggleDarkMode() {
		darkMode.set(!$darkMode);

		if ($darkMode) {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
			document.documentElement.setAttribute('data-theme', 'light');
		}
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<nav class="flex flex-col md:flex-row mx-6 md:mx-24 my-8">
	<div class="flex grow">
		<a class="flex gap-4 items-center" href="/">
			<Icon icon="bx:code-alt" width="48" />
			<div class="font-bold text-2xl leading-none">Jacob<br />Roling</div>
		</a>
		<div class="flex items-center grow justify-end">
			<button class="p-2" on:click={toggleDarkMode}>
				<Icon icon={$darkMode ? 'akar-icons:sun-fill' : 'akar-icons:moon-fill'} width="24" />
			</button>
			<button class="p-2 md:hidden" on:click={toggleMenu}>
				<Icon icon={menuOpen ? 'carbon:close' : 'bx:menu-alt-right'} width="32" />
			</button>
			{#if !menuOpen}
				<div class="hidden md:flex" in:slide={{ duration: 200 }} out:slide={{ duration: 200 }}>
					{#each links as { name, href }}
						<a
							class="text-xl font-medium px-4 py-2 hover:underline decoration-2 decoration-primary"
							{href}
						>
							{name}
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
	{#if menuOpen}
		<div class="flex flex-col mt-4" in:slide={{ duration: 200 }} out:slide={{ duration: 200 }}>
			{#each links as { name, href }}
				<a
					class="text-xl font-medium px-4 py-2 hover:underline decoration-2 decoration-primary"
					on:click={toggleMenu}
					{href}
				>
					{name}
				</a>
			{/each}
		</div>
	{/if}
</nav>
