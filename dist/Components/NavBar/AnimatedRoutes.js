"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Home_1 = __importDefault(require("../../pages/Home"));
const About_1 = __importDefault(require("../../pages/About"));
const Contact_1 = __importDefault(require("../../pages/Contact"));
const AirMonitors_1 = __importDefault(require("../../pages/AirMonitors"));
const SignIn_1 = __importDefault(require("../../pages/SignIn"));
const SignUp_1 = __importDefault(require("../../pages/SignUp"));
const react_router_dom_1 = require("react-router-dom");
const framer_motion_1 = require("framer-motion");
const myStyle = {
    overflowX: "hidden",
    position: "relative",
};
const AnimatedRoutes = () => {
    const location = (0, react_router_dom_1.useLocation)();
    return (react_1.default.createElement("main", { style: myStyle },
        react_1.default.createElement(framer_motion_1.AnimatePresence, { exitBeforeEnter: true },
            react_1.default.createElement(react_router_dom_1.Routes, { location: location, key: location.pathname },
                react_1.default.createElement(react_router_dom_1.Route, { path: '/', exact: true, element: react_1.default.createElement(Home_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/About', element: react_1.default.createElement(About_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/Contact', element: react_1.default.createElement(Contact_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/Monitors', element: react_1.default.createElement(AirMonitors_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/SignIn', element: react_1.default.createElement(SignIn_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/SignUp', element: react_1.default.createElement(SignUp_1.default, null) })))));
};
exports.default = AnimatedRoutes;
//# sourceMappingURL=AnimatedRoutes.js.map