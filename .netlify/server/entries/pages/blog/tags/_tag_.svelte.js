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
  default: () => U5Btagu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a69eba8f = require("../../../../chunks/index-a69eba8f.js");
var import_AspectRatio_81ceb655 = require("../../../../chunks/AspectRatio-81ceb655.js");
const load = async ({ params, fetch }) => {
  const currentTag = params.tag;
  const response = await fetch("/api/posts");
  const posts = await response.json();
  const matchingPosts = posts.filter((post) => post.meta.tags.includes(currentTag));
  return { props: { posts: matchingPosts } };
};
const U5Btagu5D = (0, import_index_a69eba8f.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `${$$result.head += `${$$result.title = `<title>Blog - Jacob Roling</title>`, ""}`, ""}

<ul class="${"my-16 flex flex-col gap-16 mx-6 md:mx-auto max-w-screen-lg"}">${(0, import_index_a69eba8f.e)(posts, ({ meta, path }) => {
    let { image, title, description, tags } = meta;
    return `

		<li class="${"grid md:grid-cols-2 gap-12"}"><a${(0, import_index_a69eba8f.d)("href", path, 0)}>${(0, import_index_a69eba8f.v)(import_AspectRatio_81ceb655.A, "AspectRatio").$$render($$result, { ratio: 16 / 9 }, {}, {
      default: () => {
        return `<img class="${"w-full h-full object-cover object-center"}"${(0, import_index_a69eba8f.d)("src", image, 0)}${(0, import_index_a69eba8f.d)("alt", title, 0)}>
				`;
      }
    })}</a>
			<div><a class="${"font-bold text-3xl"}"${(0, import_index_a69eba8f.d)("href", path, 0)}>${(0, import_index_a69eba8f.f)(title)}</a>
				<p class="${"mt-4 italic"}">${(0, import_index_a69eba8f.f)(description)}</p>
				<a class="${"inline-block mt-4 decoration-2 decoration-primary font-medium hover:underline"}"${(0, import_index_a69eba8f.d)("href", path, 0)}>Read more</a>
				<div class="${"mt-4"}">${(0, import_index_a69eba8f.e)(tags, (tag) => {
      return `<a class="${"mr-1 px-2 py-1 font-medium bg-primary text-neutral-light dark:text-neutral-dark"}"${(0, import_index_a69eba8f.d)("href", `/blog/tags/${tag}`, 0)}>${(0, import_index_a69eba8f.f)(tag)}</a>`;
    })}
				</div></div>
		</li>`;
  })}</ul>`;
});
