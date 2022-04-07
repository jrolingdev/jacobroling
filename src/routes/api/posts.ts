export async function get() {
	const postFiles = import.meta.glob('../blog/*.md');
	const postFilesEntries = Object.entries(postFiles);

	const posts = await Promise.all(
		postFilesEntries.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(2, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	const sortedPosts = posts.sort((a, b) => {
		// @ts-ignore
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return {
		body: sortedPosts
	};
}
