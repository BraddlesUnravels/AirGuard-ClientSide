"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AirGuard_Logo_png_1 = __importDefault(require("../../Components/img/AirGuard_Logo.png"));
const HomeElements_1 = require("./HomeElements");
const framer_motion_1 = require("framer-motion");
const Animation_1 = require("../../Components/NavBar/Animation");
const Home = () => {
    return (react_1.default.createElement(HomeElements_1.ExContainer, null,
        react_1.default.createElement(framer_motion_1.motion.div, { initial: 'initial', animate: 'in', exit: 'out', variants: Animation_1.pageVariants, transition: Animation_1.pageTrans, style: Animation_1.pageStyle },
            react_1.default.createElement(HomeElements_1.Logo, { src: AirGuard_Logo_png_1.default }))));
};
exports.default = Home;
//# sourceMappingURL=index.js.map