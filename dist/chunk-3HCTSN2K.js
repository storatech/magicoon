import { codepoints_default } from "./chunk-WUSZVMMJ.js";
// magicoon_react/get-string.ts
var getValue = function(variant, icon) {
    var codePoint = codepoints_default[variant][icon];
    if (!codePoint || isNaN(codePoint)) return "";
    return String.fromCodePoint(codePoint);
};
export { getValue };
