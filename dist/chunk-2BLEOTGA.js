import { getValue } from "./chunk-3HCTSN2K.js";
import { styles_default } from "./chunk-MRI4W76N.js";
// magicoon_react/Magicoon.tsx
import React from "react";
var MagicoonFilled = function(param) {
    var icon = param.icon, className = param.className;
    var value = getValue("filled", icon);
    return /* @__PURE__ */ React.createElement("span", {
        style: styles_default.filled,
        className: className
    }, value);
};
var MagicoonRegular = function(param) {
    var icon = param.icon, className = param.className;
    var value = getValue("regular", icon);
    return /* @__PURE__ */ React.createElement("span", {
        style: styles_default.regular,
        className: className
    }, value);
};
var MagicoonLight = function(param) {
    var icon = param.icon, className = param.className;
    var value = getValue("light", icon);
    return /* @__PURE__ */ React.createElement("span", {
        style: styles_default.light,
        className: className
    }, value);
};
var Magicoon = function(param) {
    var variant = param.variant, icon = param.icon, className = param.className;
    switch(variant){
        case "filled":
            return /* @__PURE__ */ React.createElement(MagicoonFilled, {
                icon: icon,
                className: className
            });
        case "light":
            return /* @__PURE__ */ React.createElement(MagicoonLight, {
                icon: icon,
                className: className
            });
        default:
            return /* @__PURE__ */ React.createElement(MagicoonRegular, {
                icon: icon,
                className: className
            });
    }
};
var Magicoon_default = Magicoon;
export { Magicoon_default };
