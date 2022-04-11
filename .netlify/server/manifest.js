var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["assets/apple-icon-180.png", "assets/apple-splash-1125-2436.jpg", "assets/apple-splash-1136-640.jpg", "assets/apple-splash-1170-2532.jpg", "assets/apple-splash-1242-2208.jpg", "assets/apple-splash-1242-2688.jpg", "assets/apple-splash-1284-2778.jpg", "assets/apple-splash-1334-750.jpg", "assets/apple-splash-1536-2048.jpg", "assets/apple-splash-1620-2160.jpg", "assets/apple-splash-1668-2224.jpg", "assets/apple-splash-1668-2388.jpg", "assets/apple-splash-1792-828.jpg", "assets/apple-splash-2048-1536.jpg", "assets/apple-splash-2048-2732.jpg", "assets/apple-splash-2160-1620.jpg", "assets/apple-splash-2208-1242.jpg", "assets/apple-splash-2224-1668.jpg", "assets/apple-splash-2388-1668.jpg", "assets/apple-splash-2436-1125.jpg", "assets/apple-splash-2532-1170.jpg", "assets/apple-splash-2688-1242.jpg", "assets/apple-splash-2732-2048.jpg", "assets/apple-splash-2778-1284.jpg", "assets/apple-splash-640-1136.jpg", "assets/apple-splash-750-1334.jpg", "assets/apple-splash-828-1792.jpg", "assets/manifest-icon-192.maskable.png", "assets/manifest-icon-512.maskable.png", "favicon.png", "images/placeholder.png", "manifest.json", "service-worker.js"]),
  mimeTypes: { ".png": "image/png", ".jpg": "image/jpeg", ".json": "application/json" },
  _: {
    entry: { "file": "start-bb9d6107.js", "js": ["start-bb9d6107.js", "chunks/index-1ba59464.js", "chunks/singletons-ef0fa748.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "blog",
        pattern: /^\/blog\/?$/,
        names: [],
        types: [],
        path: "/blog",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "contact",
        pattern: /^\/contact\/?$/,
        names: [],
        types: [],
        path: "/contact",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "projects",
        pattern: /^\/projects\/?$/,
        names: [],
        types: [],
        path: "/projects",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "endpoint",
        id: "blog/rss",
        pattern: /^\/blog\/rss\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/blog/rss.ts.js")))
      },
      {
        type: "endpoint",
        id: "api/posts",
        pattern: /^\/api\/posts\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/posts.ts.js")))
      },
      {
        type: "page",
        id: "blog/Top 3 ETFs on the ASX 2022",
        pattern: /^\/blog\/Top 3 ETFs on the ASX 2022\/?$/,
        names: [],
        types: [],
        path: "/blog/Top 3 ETFs on the ASX 2022",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "blog/tags/[tag]",
        pattern: /^\/blog\/tags\/([^/]+?)\/?$/,
        names: ["tag"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 7],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
