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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a69eba8f = require("../../chunks/index-a69eba8f.js");
var import_Icon_d59343c0 = require("../../chunks/Icon-d59343c0.js");
var import_AspectRatio_81ceb655 = require("../../chunks/AspectRatio-81ceb655.js");
const skills = [
  {
    color: "blue",
    icon: "cib:css3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    name: "CSS"
  },
  {
    icon: "cib:flutter",
    color: "cyan",
    url: "https://flutter.dev",
    name: "Flutter"
  },
  {
    url: "https://firebase.google.com",
    icon: "cib:firebase",
    color: "amber",
    name: "Firebase"
  },
  {
    icon: "cib:svelte",
    color: "orange",
    url: "https://svelte.dev",
    name: "Svelte"
  },
  {
    color: "blue",
    icon: "cib:typescript",
    name: "TypeScript",
    url: "https://www.typescriptlang.org"
  },
  {
    url: "https://tailwindcss.com",
    name: "Tailwind",
    icon: "mdi:tailwind",
    color: "cyan"
  },
  {
    color: "orange",
    icon: "cib:html5",
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    icon: "cib:javascript",
    color: "yellow",
    url: "https://www.javascript.com",
    name: "JavaScript"
  },
  {
    icon: "akar-icons:node-fill",
    name: "Node.js",
    color: "green",
    url: "https://nodejs.org/en"
  }
];
const Routes = (0, import_index_a69eba8f.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Web Developer - Jacob Roling</title>`, ""}`, ""}

<div class="${"my-16 mx-6 md:mx-auto max-w-screen-md"}"><section><h2 class="${"text-5xl font-bold"}">About Me</h2>
		<div class="${"mt-8 grid md:grid-cols-2 gap-8"}"><div><p class="${"mt-8 text-xl md:text-3xl md:font-bold"}">I&#39;m a web developer. I take designs or ideas and turn them into experiences delivered
					through the web.
				</p></div>
			<div class="${"order-first md:order-last"}">${(0, import_index_a69eba8f.v)(import_AspectRatio_81ceb655.A, "AspectRatio").$$render($$result, { ratio: 1 }, {}, {
    default: () => {
      return `<img class="${"w-full h-full object-cover object-center"}" src="${"/images/placeholder.png"}" alt="${"Jacob Roling"}">`;
    }
  })}</div></div>
		<p class="${"mt-8 text-xl"}">I develop for all platforms and devices whether that means building beautiful, responsive,
			fast UI/UXs for frontends or working with APIs, webhooks and databases in the backend.
		</p></section>

	<section class="${"mt-16"}"><h2 class="${"text-5xl font-bold"}">Skills</h2>
		<div class="${"mt-8"}">${(0, import_index_a69eba8f.e)(skills, ({ name, icon, url }) => {
    return `<a class="${"inline-flex gap-4 items-center px-4 py-1 mr-4 mt-2 text-lg font-medium"}"${(0, import_index_a69eba8f.d)("href", url, 0)} target="${"_blank"}">${(0, import_index_a69eba8f.v)(import_Icon_d59343c0.I, "Icon").$$render($$result, { icon }, {}, {})}
					<div>${(0, import_index_a69eba8f.f)(name)}</div>
				</a>`;
  })}</div></section>

	</div>`;
});
