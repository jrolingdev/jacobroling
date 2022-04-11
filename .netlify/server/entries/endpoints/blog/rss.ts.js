var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
const siteURL = "https://jacobroling.com";
const siteTitle = "Blog - Jacob Roling";
const siteDescription = "Jacob Roling";
const get = async () => {
  const posts = await Promise.all(Object.entries({ "./Top 3 ETFs on the ASX 2022.md": () => Promise.resolve().then(() => __toESM(require("../../pages/blog/Top 3 ETFs on the ASX 2022.md.js"))) }).map(async ([path, resolver]) => {
    const { metadata } = await resolver();
    const slug = path.slice(2, -3);
    return __spreadProps(__spreadValues({}, metadata), { slug });
  })).then((posts2) => {
    return posts2.sort((a, b) => new Date(b.date) - new Date(a.date));
  });
  const body = render(posts);
  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml"
  };
  return {
    body,
    headers
  };
};
const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
	<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
		<channel>
			<title>${siteTitle}</title>
			<description>${siteDescription}</description>
			<link>${siteURL}</link>
			<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
			${posts.map((post) => `
				<item>
					<guid isPermaLink="true">${siteURL}/blog/${post.slug}</guid>
					<title>${post.title}</title>
					<link>${siteURL}/blog/${post.slug}</link>
					<description>${post.excerpt}</description>
					<pubDate>${new Date(post.date).toUTCString()}</pubDate>
				</item>
			`).join("")}
		</channel>
	</rss>
`;
