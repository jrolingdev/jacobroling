<script lang="ts">
	import Icon from '@iconify/svelte';
	import AspectRatio from '$lib/components/AspectRatio.svelte';
	import { skills, experience } from '$lib/data';
</script>

<svelte:head>
	<title>Web Developer - Jacob Roling</title>
</svelte:head>

<div class="my-16 mx-6 md:mx-auto max-w-screen-md">
	<section>
		<h2 class="text-5xl font-bold">About Me</h2>
		<div class="mt-8 grid md:grid-cols-2 gap-8">
			<div>
				<p class="mt-8 text-xl md:text-3xl md:font-bold">
					I'm a web developer. I take designs or ideas and turn them into experiences delivered
					through the web.
				</p>
			</div>
			<div
				class="mx-auto order-first md:order-last w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden"
			>
				<AspectRatio ratio={1}>
					<img
						class="w-full h-full object-cover object-center"
						src="https://www.gravatar.com/avatar/6814e1c75197390a4832443e1fd0d63a?s=500"
						alt="Jacob Roling"
					/>
				</AspectRatio>
			</div>
		</div>
		<p class="mt-8 text-xl">
			I develop for all platforms and devices whether that means building beautiful, responsive,
			fast UI/UXs for frontends or working with APIs, webhooks and databases in the backend.
		</p>
	</section>

	<section class="mt-16">
		<h2 class="text-5xl font-bold">Skills</h2>
		<div class="mt-8">
			{#each skills as { name, icon, url }}
				<a
					class="inline-flex gap-4 items-center px-4 py-1 mr-4 mt-2 text-lg font-medium"
					href={url}
					target="_blank"
				>
					<Icon {icon} />
					<div>{name}</div>
				</a>
			{/each}
		</div>
	</section>

	<!-- <section class="mt-16">
		<h2 class="text-5xl font-bold">Experience</h2>
		<div class="mt-8">
			{#each experience as { title, employer, startDate, endDate, achievements }}
				<div>
					<div class="text-3xl font-medium">{title}</div>
					<div class="mt-2 text-2xl">{employer}</div>
					<div class="mt-2 text-xl">{startDate} - {endDate}</div>
				</div>
				<div class="mt-2 text-xl">Achievements</div>
				<ol class="mt-2">
					{#each achievements as achievement}
						<li>{achievement}</li>
					{/each}
				</ol>
			{/each}
		</div>
	</section> -->
</div>
