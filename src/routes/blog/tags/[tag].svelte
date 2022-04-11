<script context="module" lang="ts">
	export const load = async ({ params, fetch }) => {
		const currentTag = params.tag;
		const response = await fetch('/api/posts');
		const posts = await response.json();
		const matchingPosts = posts.filter((post) => post.meta.tags.includes(currentTag));

		return {
			props: {
				posts: matchingPosts
			}
		};
	};
</script>

<script lang="ts">
	import AspectRatio from '$lib/components/AspectRatio.svelte';
	export let posts;
</script>

<svelte:head>
	<title>Blog - Jacob Roling</title>
</svelte:head>

<ul class="my-16 flex flex-col gap-16 mx-6 md:mx-auto max-w-screen-lg">
	{#each posts as { meta, path }}
		{@const { image, title, description, tags } = meta}

		<li class="grid md:grid-cols-2 gap-12">
			<a href={path}>
				<AspectRatio ratio={16 / 9}>
					<img class="w-full h-full object-cover object-center" src={image} alt={title} />
				</AspectRatio>
			</a>
			<div>
				<a class="font-bold text-3xl" href={path}>{title}</a>
				<p class="mt-4 italic">
					{description}
				</p>
				<a
					class="inline-block mt-4 decoration-2 decoration-primary font-medium hover:underline"
					href={path}>Read more</a
				>
				<div class="mt-4">
					{#each tags as tag}
						<a
							class="mr-1 px-2 py-1 font-medium bg-primary bg-opacity-30"
							href={`/blog/tags/${tag}`}>{tag}</a
						>
					{/each}
				</div>
			</div>
		</li>
	{/each}
</ul>
