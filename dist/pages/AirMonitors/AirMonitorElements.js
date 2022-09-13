"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LstItm = exports.UnOrderedLst = exports.Main = exports.Logo = exports.Card = exports.Section1 = exports.ExContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const BackImageDPI300_JPEG_1 = __importDefault(require("../../Components/img/BackImageDPI300.JPEG"));
exports.ExContainer = styled_components_1.default.div `
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
  background-image: url(${BackImageDPI300_JPEG_1.default});
  background-size: cover;
  background-position: center;
`;
exports.Section1 = styled_components_1.default.section `
    display: flex;
    width: auto;
    height: auto;
   
    text-align: center;
    color: #000;
`;
exports.Card = styled_components_1.default.div `
    text-align: center;
    padding: 10px;
    width: 200px;
    border-radius: 5px;
    padding: 1em;
`;
exports.Logo = styled_components_1.default.img `
    width: 200px;
    height: 200px;
    object-fit: contain;
`;
exports.Main = styled_components_1.default.main `

`;
exports.UnOrderedLst = styled_components_1.default.ul `
    list-style-type: none;
    columns: 8;
    -webkit-columns: 8;
    -moz-columns: 8;
    list-style-position: inside;
    align-items: center;
    flex-direction: column;

`;
exports.LstItm = styled_components_1.default.li `

    flex-direction: column;
    text-decoration: none;
    text-align: left;
    margin-top: 10px;
    margin-right: auto;
    margin-left: auto;
    padding: 5px;
    box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2);
    border-radius: 5px;
    backdrop-filter: blur(5px);
    color: #000000;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    background-color:${props => (props.colorCode === 'Good' ? 'rgba(66, 169, 60, 0.2)'
    : props.colorCode === 'Fair' ? 'rgba(238, 201, 0, 0.3)'
        : props.colorCode === 'Poor' ? 'rgba(228, 116, 0, 0.4)'
            : props.colorCode === 'Very Poor' ? 'rgba(186, 0, 41, 0.5)'
                : 'rgba(255, 255, 255, 0.1)')};

    :first-child {
        margin-top: 0;
    }
`;
//# sourceMappingURL=AirMonitorElements.js.map