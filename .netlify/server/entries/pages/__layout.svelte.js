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
  default: () => _layout,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a69eba8f = require("../../chunks/index-a69eba8f.js");
var import_Icon_d59343c0 = require("../../chunks/Icon-d59343c0.js");
var global = "";
const subscriber_queue = [];
function writable(value, start = import_index_a69eba8f.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_a69eba8f.a)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_a69eba8f.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_a69eba8f.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var darkMode = writable(false);
const Navbar = (0, import_index_a69eba8f.c)(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  $$unsubscribe_darkMode = (0, import_index_a69eba8f.b)(darkMode, (value) => $darkMode = value);
  const links = [
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];
  $$unsubscribe_darkMode();
  return `<nav class="${"flex flex-col md:flex-row mx-6 md:mx-24 my-8"}"><div class="${"flex grow"}"><a class="${"flex gap-4 items-center"}" href="${"/"}">${(0, import_index_a69eba8f.v)(import_Icon_d59343c0.I, "Icon").$$render($$result, { icon: "bx:code-alt", width: "48" }, {}, {})}
			<div class="${"font-bold text-2xl leading-none"}">Jacob<br>Roling</div></a>
		<div class="${"flex items-center grow justify-end"}"><button class="${"p-2"}">${(0, import_index_a69eba8f.v)(import_Icon_d59343c0.I, "Icon").$$render($$result, {
    icon: $darkMode ? "akar-icons:sun-fill" : "akar-icons:moon-fill",
    width: "24"
  }, {}, {})}</button>
			<button class="${"p-2 md:hidden"}">${(0, import_index_a69eba8f.v)(import_Icon_d59343c0.I, "Icon").$$render($$result, {
    icon: "bx:menu-alt-right",
    width: "32"
  }, {}, {})}</button>
			${`<div class="${"hidden md:flex"}">${(0, import_index_a69eba8f.e)(links, ({ name, href }) => {
    return `<a class="${"text-xl font-medium px-4 py-2 hover:underline decoration-2 decoration-primary"}"${(0, import_index_a69eba8f.d)("href", href, 0)}>${(0, import_index_a69eba8f.f)(name)}
						</a>`;
  })}</div>`}</div></div>
	${``}</nav>`;
});
const load = ({ url }) => {
  const currentRoute = url.pathname;
  return { props: { currentRoute } };
};
const _layout = (0, import_index_a69eba8f.c)(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  $$unsubscribe_darkMode = (0, import_index_a69eba8f.b)(darkMode, (value) => $darkMode = value);
  let { currentRoute } = $$props;
  if ($$props.currentRoute === void 0 && $$bindings.currentRoute && currentRoute !== void 0)
    $$bindings.currentRoute(currentRoute);
  $$unsubscribe_darkMode();
  return `${$$result.head += `<meta name="${"theme-color"}"${(0, import_index_a69eba8f.d)("content", $darkMode ? "#000000" : "#ffffff", 0)} data-svelte="svelte-17f4f26">`, ""}

<header>${(0, import_index_a69eba8f.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}</header>

<div><main>${slots.default ? slots.default({}) : ``}</main></div>

`;
});
