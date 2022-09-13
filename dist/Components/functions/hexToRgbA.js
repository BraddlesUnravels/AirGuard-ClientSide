"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hexToRgbA = (hex, alpha = 1) => {
    try {
        const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
        return `rgba(${r},${g},${b},${alpha})`;
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = hexToRgbA;
//# sourceMappingURL=hexToRgbA.js.map