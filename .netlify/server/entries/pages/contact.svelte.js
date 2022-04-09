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
  default: () => Contact
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a69eba8f = require("../../chunks/index-a69eba8f.js");
var import_browser = require("@emailjs/browser");
var import_yup = require("yup");
var import_Icon_d59343c0 = require("../../chunks/Icon-d59343c0.js");
const Input = (0, import_index_a69eba8f.c)(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { name } = $$props;
  let { type } = $$props;
  let { textarea = false } = $$props;
  let { cols = 30 } = $$props;
  let { rows = 10 } = $$props;
  let { message = "" } = $$props;
  let { success = false } = $$props;
  let { error = false } = $$props;
  function clear() {
    success = false;
    error = false;
    message = "";
  }
  function validate() {
    success = true;
  }
  function warn(text) {
    error = true;
    message = text;
  }
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.textarea === void 0 && $$bindings.textarea && textarea !== void 0)
    $$bindings.textarea(textarea);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0)
    $$bindings.cols(cols);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.success === void 0 && $$bindings.success && success !== void 0)
    $$bindings.success(success);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.clear === void 0 && $$bindings.clear && clear !== void 0)
    $$bindings.clear(clear);
  if ($$props.validate === void 0 && $$bindings.validate && validate !== void 0)
    $$bindings.validate(validate);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  return `
<div class="${"relative my-6"}"><label class="${"absolute -top-8 font-medium"}"${(0, import_index_a69eba8f.d)("for", name, 0)}>${(0, import_index_a69eba8f.f)(label)}</label>
	${textarea ? `<textarea${(0, import_index_a69eba8f.d)("type", type, 0)} class="${[
    "text-lg block w-full outline-none resize-none border-b-2 bg-neutral-light dark:bg-neutral-dark focus:border-primary",
    (success ? "border-success" : "") + " " + (error ? "border-error" : "")
  ].join(" ").trim()}"${(0, import_index_a69eba8f.d)("name", name, 0)}${(0, import_index_a69eba8f.d)("cols", cols, 0)}${(0, import_index_a69eba8f.d)("rows", rows, 0)} placeholder="${" "}"></textarea>` : `<input${(0, import_index_a69eba8f.d)("type", type, 0)} class="${[
    "text-lg block w-full outline-none resize-none border-b-2 bg-neutral-light dark:bg-neutral-dark focus:border-primary",
    (success ? "border-success" : "") + " " + (error ? "border-error" : "")
  ].join(" ").trim()}"${(0, import_index_a69eba8f.d)("name", name, 0)} placeholder="${" "}">`}
	${message.length > 0 ? `<div class="${[
    "mt-2 text-primary",
    (success ? "text-success" : "") + " " + (error ? "text-error" : "")
  ].join(" ").trim()}">${(0, import_index_a69eba8f.f)(message)}</div>` : ``}</div>`;
});
const Contact = (0, import_index_a69eba8f.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_browser.init)("user_jIRvLaZg743dF5V7ne1qa");
  var STATE;
  (function(STATE2) {
    STATE2[STATE2["ACTIVE"] = 0] = "ACTIVE";
    STATE2[STATE2["IDLE"] = 1] = "IDLE";
    STATE2[STATE2["COMPLETE"] = 2] = "COMPLETE";
  })(STATE || (STATE = {}));
  let form;
  let state = STATE.IDLE;
  let inputs = { email: {}, phone: {}, message: {} };
  (0, import_yup.object)({
    email: (0, import_yup.string)().email().required(),
    phone: (0, import_yup.string)().required(),
    message: (0, import_yup.string)().required()
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>Contact - Jacob Roling</title>`, ""}`, ""}

<section class="${"my-16 mx-6 md:mx-auto max-w-screen-md"}"><form${(0, import_index_a69eba8f.d)("this", form, 0)}><div class="${"grid md:grid-cols-2 md:gap-4"}">${(0, import_index_a69eba8f.v)(Input, "Input").$$render($$result, {
      label: "Email",
      name: "email",
      type: "text",
      this: inputs.email
    }, {
      this: ($$value) => {
        inputs.email = $$value;
        $$settled = false;
      }
    }, {})}
			${(0, import_index_a69eba8f.v)(Input, "Input").$$render($$result, {
      label: "Phone",
      name: "phone",
      type: "text ",
      this: inputs.phone
    }, {
      this: ($$value) => {
        inputs.phone = $$value;
        $$settled = false;
      }
    }, {})}</div>
		${(0, import_index_a69eba8f.v)(Input, "Input").$$render($$result, {
      label: "Message",
      name: "message",
      textarea: true,
      type: "text",
      this: inputs.message
    }, {
      this: ($$value) => {
        inputs.message = $$value;
        $$settled = false;
      }
    }, {})}
		<button class="${[
      "text-lg font-medium flex gap-4 items-center bg-primary px-4 py-2 rounded-full shadow",
      (state === STATE.COMPLETE || state === STATE.ACTIVE ? "pointer-events-none" : "") + " " + (state === STATE.COMPLETE ? "bg-success" : "") + " " + (state === STATE.COMPLETE ? "text-success" : "")
    ].join(" ").trim()}" type="${"submit"}" ${state === STATE.COMPLETE || state === STATE.ACTIVE ? "disabled" : ""}><div>${(0, import_index_a69eba8f.f)(state === STATE.IDLE ? "Send" : state === STATE.ACTIVE ? "Sending" : "Sent")}</div>
			${(0, import_index_a69eba8f.v)(import_Icon_d59343c0.I, "Icon").$$render($$result, {
      icon: state === STATE.IDLE ? "carbon:send-filled" : state === STATE.ACTIVE ? "eos-icons:loading" : "ant-design:check-outlined",
      width: "24"
    }, {}, {})}</button></form></section>`;
  } while (!$$settled);
  return $$rendered;
});
