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
  A: () => AspectRatio
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a69eba8f = require("./index-a69eba8f.js");
const AspectRatio = (0, import_index_a69eba8f.c)(($$result, $$props, $$bindings, slots) => {
  let { ratio = 16 / 9 } = $$props;
  if ($$props.ratio === void 0 && $$bindings.ratio && ratio !== void 0)
    $$bindings.ratio(ratio);
  return `<div class="${"relative w-full h-0"}"${(0, import_index_a69eba8f.d)("style", `padding-bottom: ${1 / ratio * 100}%;`, 0)}><div class="${"absolute top-0 left-0 bottom-0 right-0"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
