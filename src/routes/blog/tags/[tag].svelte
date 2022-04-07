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
	export let posts;
</script>

{posts}
