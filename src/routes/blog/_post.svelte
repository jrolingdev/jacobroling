<script lang="ts">
	import '$lib/styles/post.scss';
	import Comments from '$lib/components/Comments.svelte';
	import AspectRatio from '$lib/components/AspectRatio.svelte';
	import { page } from '$app/stores';

	export let title;
	export let published;
	export let updated;
	export let image;
	export let tags;
	export let description;

	function formatDate(dateString) {
		const date = new Date(dateString);
		const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
		const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
		const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
		return `${month} ${day}, ${year}`;
	}
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={$page.url.href} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta name="description" content={description} />
	<meta property="og:local" content="en_AU" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="768" />
	<meta property="og:image:height" content="432" />
	<meta property="og:site_name" content={$page.url.hostname} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:creator" content="@https://twitter.com/jacobrolingdev" />
	<meta property="twitter:label1" content="Written by" />
	<meta property="twitter:data1" content="Jacob Roling" />
	<meta property="twitter:label2" content="Est. reading time" />
	<meta property="twitter:data2" content="5 minutes" />
	<meta property="article:published_time" content={new Date(published).toISOString()} />
	<meta property="article:modified_time" content={new Date(updated).toISOString()} />
	<meta property="author" content="Jacob Roling" />
	<meta
		property="author:image:src"
		content="https://www.gravatar.com/avatar/6814e1c75197390a4832443e1fd0d63a"
	/>
</svelte:head>

<article class="mx-6 md:mx-auto max-w-screen-md">
	<div class="my-16">
		<AspectRatio ratio={16 / 9}>
			<img class="w-full h-full object-cover object-center" src={image} alt={title} />
		</AspectRatio>
		<h1>{title}</h1>
		<div class="pt-2 border-t-2 w-max border-neutral-900">
			<div><span class="font-medium">Published:</span> {formatDate(published)}</div>
			<div><span class="font-medium">Updated:</span> {formatDate(updated)}</div>
		</div>
	</div>

	<slot />
</article>

<div
	class="my-16 py-16 grid grid-cols-3 mx-6 md:mx-auto max-w-screen-md border-y-2 border-neutral-dark dark:border-neutral-light"
>
	<div class="flex items-center w-32 h-32 rounded-full overflow-hidden mx-auto">
		<AspectRatio ratio={1}>
			<img
				class="w-full h-full object-cover object-center"
				src="/images/placeholder.png"
				alt="Jacob Roling"
			/>
		</AspectRatio>
	</div>
	<div class="col-span-2">
		<p class="text-lg">
			I'm Jacob Roling, a web developer. I am passionate about music, kickboxing and investing. I
			currently live in Adelaide, South Australia and work as CTO of Foxtail.
		</p>
	</div>
</div>

<div class="my-16 mx-6 md:mx-auto max-w-screen-md">
	<div class="text-3xl font-bold">You might like...</div>
	<div class="mt-8">
		{#each tags as tag}
			<a
				class="mr-1 px-2 py-1 font-medium bg-primary text-neutral-light dark:text-neutral-dark"
				href={`/blog/tags/${tag}`}>{tag}</a
			>
		{/each}
	</div>
</div>

<Comments />
