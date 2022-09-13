"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = exports.NavBtnLink = exports.NavBtn = exports.NavMenu = exports.Bars = exports.NavLink = exports.Nav = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const fa_1 = require("react-icons/fa");
exports.Nav = styled_components_1.default.nav `
    background: #6D7B8D;
    height: 80px;
    display:flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;
exports.NavLink = (0, styled_components_1.default)(react_router_dom_1.NavLink) `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`;
exports.Bars = (0, styled_components_1.default)(fa_1.FaBars) `
    display: none;
    color: #000;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
exports.NavMenu = styled_components_1.default.div `
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
exports.NavBtn = styled_components_1.default.nav `
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none
    }
`;
exports.NavBtnLink = (0, styled_components_1.default)(react_router_dom_1.NavLink) `
    border-radius: 4px;
    background: #000;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #fff;
        color: #010606;
        
    }
`;
exports.Logo = styled_components_1.default.img `
    width: 100%;
    height: 100%;
    max-width: 130px;
    max-height: 130px;
    object-fit: contain;
`;
//# sourceMappingURL=NavBarElements.js.map