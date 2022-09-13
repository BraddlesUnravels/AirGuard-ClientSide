"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExContainer = void 0;
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
//# sourceMappingURL=SignInElements.js.map