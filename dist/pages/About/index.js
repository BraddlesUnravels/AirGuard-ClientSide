"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./About.css");
const BackImageDPI300_JPEG_1 = __importDefault(require("../../Components/img/BackImageDPI300.JPEG"));
const NavBarElements_1 = require("../../Components/NavBar/NavBarElements");
const framer_motion_1 = require("framer-motion");
const Animation_1 = require("../../Components/NavBar/Animation");
const About = () => {
    const mystyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        backgroundImage: `url(${BackImageDPI300_JPEG_1.default})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    return (react_1.default.createElement("div", { className: 'about-externalContainer', style: mystyle },
        react_1.default.createElement(framer_motion_1.motion.div, { initial: 'initial', animate: 'in', exit: 'out', variants: Animation_1.pageVariants, transition: Animation_1.pageTrans, style: Animation_1.pageStyle },
            react_1.default.createElement("div", { className: 'table' },
                react_1.default.createElement("div", { className: 'about-card' },
                    react_1.default.createElement("h1", null, "About Us"),
                    react_1.default.createElement("hr", null),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("p", { className: 'bd' },
                            react_1.default.createElement("p", { className: 'about-headings' }, "What is AirGuard"),
                            "AirGruard is a free open source application that uses the Victorian air monitor network",
                            react_1.default.createElement("br", null),
                            "to notify users of negative changes in air quality readings. The purpose of this is to",
                            react_1.default.createElement("br", null),
                            "provide an early warning system by notifying registered users of negative changes in",
                            react_1.default.createElement("br", null),
                            "air quality readings and forcasts.",
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("p", { className: 'about-headings' }, "Why AirGuard Exists"),
                            "On the 21st of November 2016, Victoria experienced the world's largest epidemic of",
                            react_1.default.createElement("br", null),
                            "thunderstorm asthma causing thousands of people to develop short-term breathing",
                            react_1.default.createElement("br", null),
                            "difficulties during and shortly after the event.",
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("br", null),
                            "At the time One of the biggest challenges that was met by state emergency services",
                            react_1.default.createElement("br", null),
                            "on that day was getting the word out there.",
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("br", null),
                            "In total the event claimed the lives of 10 Victorians and led to the hospitalisation of",
                            react_1.default.createElement("br", null),
                            "more than 3,000 more. Which left the question; Could the number of deaths and",
                            react_1.default.createElement("br", null),
                            "hospitalistaions have been reduced if these people had the option to recieve a",
                            react_1.default.createElement("br", null),
                            "warning notification or daily forecast of expected air quality?",
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("br", null),
                            "This is the question that led to the development of AirGuard.",
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("p", { className: 'about-headings' }, "How It Works"),
                            "Users register for notifications of varying sensitivity levels to air monitors they wish",
                            react_1.default.createElement("br", null),
                            "to recieve updates, warnings, and forecasts from. These can be localised monitors to",
                            react_1.default.createElement("br", null),
                            "their home or work or state wide.",
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("br", null),
                            "Development is a work in progress and we hope to introduce the capability of location",
                            react_1.default.createElement("br", null),
                            "based warning noticications and forecasts with the future implementation of a mobile",
                            react_1.default.createElement("br", null),
                            "application. Although this functionality does not exist at this time.",
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("p", { className: 'about-headings' }, "Support for AirGuard"),
                            "Continued development of this applcation as a free service is an expensive project and",
                            react_1.default.createElement("br", null),
                            "donations are always welcomed and highly valued. If you'd like to show your support",
                            react_1.default.createElement("br", null),
                            "by making a donation, then you'll notice the donteplease page and send us a",
                            react_1.default.createElement("br", null),
                            "message requesting how to donate.",
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("div", { className: 'donate-flex-end' },
                                react_1.default.createElement(NavBarElements_1.NavBtnLink, { to: '/Contact' }, "Donate")))))))));
};
exports.default = About;
//# sourceMappingURL=index.js.map