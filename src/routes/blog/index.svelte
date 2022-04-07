<script context="module" lang="ts">
	export const load = async ({ fetch }) => {
		const postsRequest = await fetch('/api/posts');
		const posts = await postsRequest.json();

		return {
			props: {
				posts
			}
		};
	};
</script>

<script lang="ts">
	export let posts;
</script>

<ul>
	{#each posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>
