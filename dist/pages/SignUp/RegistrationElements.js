"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBox = exports.Form = exports.Registered = exports.Section = exports.ExContainer = void 0;
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
  margin-right: 0;
  margin-left: 0;
`;
exports.Section = styled_components_1.default.section `
  /* creates the blured background box */
  box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2);
  border-radius: 5px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.2);
  padding: 25px;

  display: flex;
  margin-right: 0;
  margin-left: 0;
  max-width: 420px;
  min-height: 400px;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 1rem;
  color: #000;

  p {
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
  }
`;
exports.Registered = styled_components_1.default.section `
  box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2);
  border-radius: 5px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.2);
  padding: 25px;

  display: flex;
  margin-right: 0;
  margin-left: 0;
  max-width: 420px;
  min-height: 200px;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 1rem;
  color: #000;

  .NavBtnLink {
    border-radius: 4px;
    background: #000;
    padding: 10px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    display: flex;
    justify-content: center;
    max-width: 90px;
    float: right;


    &:hover {
      transition: all 0.3s ease-in-out;
      background: #fff;
      color: #010606;   
    }
  }

`;
exports.Form = styled_components_1.default.form `
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-bottom: 1rem;

  label {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-align: right;
    line-height: 26px;
    margin-bottom: 10px;
  }

  input {
    height: 20px;
    flex: 0 0 200px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: #6D6D7E;
    
    &::placeholder {
      color: #000;
      opacity: .5;
    }
  }

  button {
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

    &:disabled {
      background: #C1C1C1;
      color: #A1A1A1;
    }
  }

`;
exports.CheckBox = styled_components_1.default.input `
  float: left;
  justify-content: flex-end;
`;
//# sourceMappingURL=RegistrationElements.js.map