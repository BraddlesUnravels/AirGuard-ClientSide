"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AirGuard_Logo_png_1 = __importDefault(require("../../Components/img/AirGuard_Logo.png"));
const NavBarElements_1 = require("./NavBarElements");
const Navbar = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(NavBarElements_1.Nav, null,
            react_1.default.createElement(NavBarElements_1.NavLink, { to: "/" },
                react_1.default.createElement(NavBarElements_1.Logo, { src: AirGuard_Logo_png_1.default })),
            react_1.default.createElement(NavBarElements_1.Bars, null),
            react_1.default.createElement(NavBarElements_1.NavMenu, null,
                react_1.default.createElement(NavBarElements_1.NavLink, { to: '/About' }, "About"),
                react_1.default.createElement(NavBarElements_1.NavLink, { to: '/Monitors' }, "Air Monitors"),
                react_1.default.createElement(NavBarElements_1.NavLink, { to: '/Contact' }, "Contact Us"),
                react_1.default.createElement(NavBarElements_1.NavLink, { to: '/SignUp' }, "Sign Up")),
            react_1.default.createElement(NavBarElements_1.NavBtn, null,
                react_1.default.createElement(NavBarElements_1.NavBtnLink, { to: '/SignIn' }, "Sign in")))));
};
exports.default = Navbar;
//# sourceMappingURL=index.js.map