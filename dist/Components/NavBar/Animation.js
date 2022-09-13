"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageStyle = exports.pageTrans = exports.pageVariants = void 0;
exports.pageVariants = {
    initial: {
        opacity: 0,
        x: "100vw",
        scale: 0.8,
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1,
    },
    out: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8,
    }
};
exports.pageTrans = {
    transition: "linear",
    duration: 0.6
};
exports.pageStyle = {
    position: "relative",
    margin: 0
};
//# sourceMappingURL=Animation.js.map