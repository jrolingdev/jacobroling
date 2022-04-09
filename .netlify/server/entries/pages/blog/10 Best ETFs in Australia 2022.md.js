var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _10u20Bestu20ETFsu20inu20Australiau202022,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a69eba8f = require("../../../chunks/index-a69eba8f.js");
var import_AspectRatio_81ceb655 = require("../../../chunks/AspectRatio-81ceb655.js");
var post = "";
const Comments = (0, import_index_a69eba8f.c)(($$result, $$props, $$bindings, slots) => {
  let utteranceElement;
  return `<div class="${"mx-6 md:mx-auto max-w-screen-md"}"${(0, import_index_a69eba8f.d)("this", utteranceElement, 0)}></div>`;
});
const getStores = () => {
  const stores = (0, import_index_a69eba8f.j)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  return `${month} ${day}, ${year}`;
}
const Post = (0, import_index_a69eba8f.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_a69eba8f.b)(page, (value) => $page = value);
  let { title } = $$props;
  let { published } = $$props;
  let { updated } = $$props;
  let { image } = $$props;
  let { tags } = $$props;
  let { description } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.published === void 0 && $$bindings.published && published !== void 0)
    $$bindings.published(published);
  if ($$props.updated === void 0 && $$bindings.updated && updated !== void 0)
    $$bindings.updated(updated);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_a69eba8f.f)(title)}</title>`, ""}<link rel="${"canonical"}"${(0, import_index_a69eba8f.d)("href", $page.url.href, 0)} data-svelte="svelte-1kzmlog"><meta name="${"robots"}" content="${"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}" data-svelte="svelte-1kzmlog"><meta name="${"description"}"${(0, import_index_a69eba8f.d)("content", description, 0)} data-svelte="svelte-1kzmlog"><meta property="${"og:local"}" content="${"en_AU"}" data-svelte="svelte-1kzmlog"><meta property="${"og:type"}" content="${"article"}" data-svelte="svelte-1kzmlog"><meta property="${"og:title"}"${(0, import_index_a69eba8f.d)("content", title, 0)} data-svelte="svelte-1kzmlog"><meta property="${"og:description"}"${(0, import_index_a69eba8f.d)("content", description, 0)} data-svelte="svelte-1kzmlog"><meta property="${"og:url"}"${(0, import_index_a69eba8f.d)("content", $page.url.href, 0)} data-svelte="svelte-1kzmlog"><meta property="${"og:image"}"${(0, import_index_a69eba8f.d)("content", image, 0)} data-svelte="svelte-1kzmlog"><meta property="${"og:image:width"}" content="${"768"}" data-svelte="svelte-1kzmlog"><meta property="${"og:image:height"}" content="${"432"}" data-svelte="svelte-1kzmlog"><meta property="${"og:site_name"}"${(0, import_index_a69eba8f.d)("content", $page.url.hostname, 0)} data-svelte="svelte-1kzmlog"><meta property="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1kzmlog"><meta property="${"twitter:creator"}" content="${"@https://twitter.com/jacobrolingdev"}" data-svelte="svelte-1kzmlog"><meta property="${"twitter:label1"}" content="${"Written by"}" data-svelte="svelte-1kzmlog"><meta property="${"twitter:data1"}" content="${"Jacob Roling"}" data-svelte="svelte-1kzmlog"><meta property="${"twitter:label2"}" content="${"Est. reading time"}" data-svelte="svelte-1kzmlog"><meta property="${"twitter:data2"}" content="${"5 minutes"}" data-svelte="svelte-1kzmlog"><meta property="${"article:published_time"}"${(0, import_index_a69eba8f.d)("content", new Date(published).toISOString(), 0)} data-svelte="svelte-1kzmlog"><meta property="${"article:modified_time"}"${(0, import_index_a69eba8f.d)("content", new Date(updated).toISOString(), 0)} data-svelte="svelte-1kzmlog"><meta property="${"author"}" content="${"Jacob Roling"}" data-svelte="svelte-1kzmlog"><meta property="${"author:image:src"}" content="${"https://www.gravatar.com/avatar/6814e1c75197390a4832443e1fd0d63a"}" data-svelte="svelte-1kzmlog">`, ""}

<article class="${"mx-6 md:mx-auto max-w-screen-md"}"><div class="${"my-16"}">${(0, import_index_a69eba8f.v)(import_AspectRatio_81ceb655.A, "AspectRatio").$$render($$result, { ratio: 16 / 9 }, {}, {
    default: () => {
      return `<img class="${"w-full h-full object-cover object-center"}"${(0, import_index_a69eba8f.d)("src", image, 0)}${(0, import_index_a69eba8f.d)("alt", title, 0)}>`;
    }
  })}
		<h1>${(0, import_index_a69eba8f.f)(title)}</h1>
		<div class="${"pt-2 border-t-2 w-max border-neutral-900"}"><div><span class="${"font-medium"}">Published:</span> ${(0, import_index_a69eba8f.f)(formatDate(published))}</div>
			<div><span class="${"font-medium"}">Updated:</span> ${(0, import_index_a69eba8f.f)(formatDate(updated))}</div></div></div>

	${slots.default ? slots.default({}) : ``}</article>

<div class="${"my-16 py-16 grid grid-cols-3 mx-6 md:mx-auto max-w-screen-md border-y-2 border-neutral-dark dark:border-neutral-light"}"><div class="${"flex items-center w-32 h-32 rounded-full overflow-hidden mx-auto"}">${(0, import_index_a69eba8f.v)(import_AspectRatio_81ceb655.A, "AspectRatio").$$render($$result, { ratio: 1 }, {}, {
    default: () => {
      return `<img class="${"w-full h-full object-cover object-center"}" src="${"/images/placeholder.png"}" alt="${"Jacob Roling"}">`;
    }
  })}</div>
	<div class="${"col-span-2"}"><p class="${"text-lg"}">I&#39;m Jacob Roling, a web developer. I am passionate about music, kickboxing and investing. I
			currently live in Adelaide, South Australia and work as CTO of Foxtail.
		</p></div></div>

<div class="${"my-16 mx-6 md:mx-auto max-w-screen-md"}"><div class="${"text-3xl font-bold"}">You might like...</div>
	<div class="${"mt-8"}">${(0, import_index_a69eba8f.e)(tags, (tag) => {
    return `<a class="${"mr-1 px-2 py-1 font-medium bg-primary text-neutral-light dark:text-neutral-dark"}"${(0, import_index_a69eba8f.d)("href", `/blog/tags/${tag}`, 0)}>${(0, import_index_a69eba8f.f)(tag)}</a>`;
  })}</div></div>

${(0, import_index_a69eba8f.v)(Comments, "Comments").$$render($$result, {}, {}, {})}`;
});
const metadata = {
  "title": "10 Best ETFs in Australia 2022",
  "published": "4/9/2021",
  "updated": "4/9/2021",
  "tags": ["etf", "investing"],
  "image": "https://source.unsplash.com/dA0SA67EgOQ",
  "description": "How to use CSS grid to make a responsive, adaptable bar chart with no math or external library required!"
};
const _10u20Bestu20ETFsu20inu20Australiau202022 = (0, import_index_a69eba8f.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_a69eba8f.v)(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>The web world is full of tradeoffs. As I wrote in my post about moving away from WordPress, going from a CMS to a static site keeps things simple. That simplicity, however, comes with costs\u2014one of which is the ability to have comments on blog posts.</p>`;
    }
  })}`;
});
