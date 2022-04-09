const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["assets/apple-icon-180.png","assets/apple-splash-1125-2436.jpg","assets/apple-splash-1136-640.jpg","assets/apple-splash-1170-2532.jpg","assets/apple-splash-1242-2208.jpg","assets/apple-splash-1242-2688.jpg","assets/apple-splash-1284-2778.jpg","assets/apple-splash-1334-750.jpg","assets/apple-splash-1536-2048.jpg","assets/apple-splash-1620-2160.jpg","assets/apple-splash-1668-2224.jpg","assets/apple-splash-1668-2388.jpg","assets/apple-splash-1792-828.jpg","assets/apple-splash-2048-1536.jpg","assets/apple-splash-2048-2732.jpg","assets/apple-splash-2160-1620.jpg","assets/apple-splash-2208-1242.jpg","assets/apple-splash-2224-1668.jpg","assets/apple-splash-2388-1668.jpg","assets/apple-splash-2436-1125.jpg","assets/apple-splash-2532-1170.jpg","assets/apple-splash-2688-1242.jpg","assets/apple-splash-2732-2048.jpg","assets/apple-splash-2778-1284.jpg","assets/apple-splash-640-1136.jpg","assets/apple-splash-750-1334.jpg","assets/apple-splash-828-1792.jpg","assets/manifest-icon-192.maskable.png","assets/manifest-icon-512.maskable.png","favicon.png","images/placeholder.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".json":"application/json"},
	_: {
		entry: {"file":"start-8dfd066c.js","js":["start-8dfd066c.js","chunks/index-6dc056d7.js","chunks/singletons-904d6808.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				path: "/blog",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "projects",
				pattern: /^\/projects\/?$/,
				names: [],
				types: [],
				path: "/projects",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "blog/rss",
				pattern: /^\/blog\/rss\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/blog/rss.ts.js'))
			},
			{
				type: 'endpoint',
				id: "api/posts",
				pattern: /^\/api\/posts\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/posts.ts.js'))
			},
			{
				type: 'page',
				id: "blog/10 Best ETFs in Australia 2022",
				pattern: /^\/blog\/10 Best ETFs in Australia 2022\/?$/,
				names: [],
				types: [],
				path: "/blog/10 Best ETFs in Australia 2022",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/tags/[tag]",
				pattern: /^\/blog\/tags\/([^/]+?)\/?$/,
				names: ["tag"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
