"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AirGuard_Logo_png_1 = __importDefault(require("../img/AirGuard_Logo.png"));
require("./Logo.css");
function Logo() {
    return (react_1.default.createElement("div", { className: 'Logo' },
        react_1.default.createElement("img", { src: AirGuard_Logo_png_1.default })));
}
exports.default = Logo;
//# sourceMappingURL=Logo.js.map