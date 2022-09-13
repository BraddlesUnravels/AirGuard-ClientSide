"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useFetchApi_1 = __importDefault(require("../../Components/functions/useFetchApi"));
const AirGuard_Logo_png_1 = __importDefault(require("../../Components/img/AirGuard_Logo.png"));
const AirMonitorElements_1 = require("./AirMonitorElements");
const Animation_1 = require("../../Components/NavBar/Animation");
const framer_motion_1 = require("framer-motion");
const Monitors = () => {
    try {
        const { data, loading, error } = (0, useFetchApi_1.default)('http://localhost:3500/currentApiData');
        if (loading)
            return (react_1.default.createElement(AirMonitorElements_1.ExContainer, null,
                react_1.default.createElement("h1", { className: 'load' }, "LOADING...")));
        if (error)
            return (react_1.default.createElement(AirMonitorElements_1.ExContainer, null,
                react_1.default.createElement(AirMonitorElements_1.Main, null,
                    react_1.default.createElement(AirMonitorElements_1.Logo, { src: AirGuard_Logo_png_1.default }),
                    react_1.default.createElement(AirMonitorElements_1.Section1, null,
                        react_1.default.createElement("h1", null,
                            "Sorry, We Fucked Up... This Bloody \"",
                            error,
                            "\" error is really ruining our day, but we're on it...")))));
        const items = data;
        return (react_1.default.createElement(AirMonitorElements_1.ExContainer, null,
            react_1.default.createElement(framer_motion_1.motion.div, { initial: 'initial', animate: 'in', exit: 'out', variants: Animation_1.pageVariants, transition: Animation_1.pageTrans, style: Animation_1.pageStyle },
                react_1.default.createElement(AirMonitorElements_1.Section1, null,
                    react_1.default.createElement(AirMonitorElements_1.Main, null,
                        react_1.default.createElement(AirMonitorElements_1.UnOrderedLst, null, items === null || items === void 0 ? void 0 : items.map((item) => {
                            var _a, _b;
                            const siteID = item.siteID;
                            const site = item.siteName;
                            const parameter = (_a = item === null || item === void 0 ? void 0 : item.siteHealthAdvices) === null || _a === void 0 ? void 0 : _a.map((siteHealthAdvice => siteHealthAdvice.healthParameter));
                            const airQualRead = (_b = item === null || item === void 0 ? void 0 : item.siteHealthAdvices) === null || _b === void 0 ? void 0 : _b.map((siteHealthAdvice => siteHealthAdvice.healthAdvice));
                            const airQualReadStr = airQualRead ? airQualRead.toString() : 'No Data';
                            return (react_1.default.createElement(AirMonitorElements_1.LstItm, { className: item, key: siteID, colorCode: airQualReadStr },
                                "Site: ",
                                site,
                                react_1.default.createElement("br", null),
                                "Measure: ",
                                parameter,
                                react_1.default.createElement("br", null),
                                "Air Quality: ",
                                airQualReadStr,
                                react_1.default.createElement("br", null)));
                        })))))));
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
};
exports.default = Monitors;
//# sourceMappingURL=index.js.map