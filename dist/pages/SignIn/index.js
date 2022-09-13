"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const Animation_1 = require("../../Components/NavBar/Animation");
const SignInElements_1 = require("./SignInElements");
const fetchMongoDB_1 = __importDefault(require("../../Components/functions/fetchMongoDB"));
const SignIn = () => {
    const { data, loading, error } = (0, fetchMongoDB_1.default)();
    return (react_1.default.createElement(SignInElements_1.ExContainer, null,
        react_1.default.createElement(framer_motion_1.motion.div, { initial: 'initial', animate: 'in', exit: 'out', variants: Animation_1.pageVariants, transition: Animation_1.pageTrans, style: Animation_1.pageStyle },
            react_1.default.createElement("h1", null, "App Coming Soon!"))));
};
exports.default = SignIn;
//# sourceMappingURL=index.js.map