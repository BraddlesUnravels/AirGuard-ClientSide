"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const NavBar_1 = __importDefault(require("./Components/NavBar"));
const react_router_dom_1 = require("react-router-dom");
const AnimatedRoutes_1 = __importDefault(require("./Components/NavBar/AnimatedRoutes"));
function App() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(NavBar_1.default, null),
        react_1.default.createElement(AnimatedRoutes_1.default, null)));
}
exports.default = App;
//# sourceMappingURL=App.js.map