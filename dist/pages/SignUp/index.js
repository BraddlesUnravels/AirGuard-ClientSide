"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const genID_1 = __importDefault(require("../../Components/functions/genID"));
const SignUpElements_1 = require("./SignUpElements");
const NavBarElements_1 = require("../../Components/NavBar/NavBarElements");
const framer_motion_1 = require("framer-motion");
const Animation_1 = require("../../Components/NavBar/Animation");
const axios_1 = __importDefault(require("axios"));
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'http://localhost:3500/register';
const SignUp = () => {
    const userID = (0, genID_1.default)(1000, 9999);
    const userRef = (0, react_1.useRef)();
    const errRef = (0, react_1.useRef)();
    const [firstName, setFirstName] = (0, react_1.useState)('');
    const [lastName, setLastName] = (0, react_1.useState)('');
    const [phone, setPhone] = (0, react_1.useState)('');
    const [suburb, setSuburb] = (0, react_1.useState)('');
    const [postcode, setPostcode] = (0, react_1.useState)('');
    const [keepUpdated, setKeepUpdated] = (0, react_1.useState)(false);
    const [email, setEmail] = (0, react_1.useState)('');
    const [validEmail, setValidEmail] = (0, react_1.useState)(false);
    const [emailFocus, setEmailFocus] = (0, react_1.useState)(false);
    const [emailExists, setEmailExists] = (0, react_1.useState)(false);
    const [pwd, setPwd] = (0, react_1.useState)('');
    const [validPwd, setValidPwd] = (0, react_1.useState)(false);
    const [pwdFocus, setPwdFocus] = (0, react_1.useState)(false);
    const [matchPwd, setMatchPwd] = (0, react_1.useState)('');
    const [validMatch, setValidMatch] = (0, react_1.useState)(false);
    const [matchFocus, setMatchFocus] = (0, react_1.useState)(false);
    const [errMsg, setErrMsg] = (0, react_1.useState)('');
    const [success, setSuccess] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        userRef.current.focus();
    }, []);
    (0, react_1.useEffect)(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);
    (0, react_1.useEffect)(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);
    (0, react_1.useEffect)(() => {
        setErrMsg('');
    }, [email, pwd, matchPwd]);
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const formData = {
            id: userID,
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Password: pwd,
            ConfirmPassword: matchPwd,
            Phone: phone,
            Suburb: suburb,
            Postcode: postcode,
            KeepUpdated: keepUpdated
        };
        e.preventDefault();
        const verifyEmail = EMAIL_REGEX.test(email);
        const verifyPwd = PWD_REGEX.test(pwd);
        if (!verifyEmail || !verifyPwd) {
            setErrMsg('Invalid Entry');
            return;
        }
        try {
            const res = yield axios_1.default.post(REGISTER_URL, JSON.stringify({ formData }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(response === null || response === void 0 ? void 0 : response.data);
            console.log(response === null || response === void 0 ? void 0 : response.accessToken);
            console.log(JSON.stringify(response));
            setSuccess(true);
            setLastName('');
            setEmail('');
            setPwd('');
            setMatchPwd('');
            setPhone('');
            setSuburb('');
            setPostcode('');
        }
        catch (err) {
            if (!(err === null || err === void 0 ? void 0 : err.response)) {
                setErrMsg('No server response');
            }
            else if (((_a = err.response) === null || _a === void 0 ? void 0 : _a.status) === 409) {
                setErrMsg('The email entered is already registered');
            }
            else {
                setErrMsg(`Sign Up Failed. Error: ${err}`);
            }
            errRef.current.focus();
        }
    });
    return (React.createElement(React.Fragment, null, success ? (React.createElement(SignUpElements_1.Section, null,
        React.createElement(framer_motion_1.motion.div, { initial: 'initial', animate: 'in', exit: 'out', variants: Animation_1.pageVariants, transition: Animation_1.pageTrans, style: Animation_1.pageStyle },
            React.createElement(SignUpElements_1.Div, null,
                React.createElement("h1", null, "Your registration has been successful!"),
                React.createElement(NavBarElements_1.NavBtnLink, { className: 'NavBtnLink', to: '/SignIn' }, "Sign In"))))) : (React.createElement(SignUpElements_1.Section, null,
        React.createElement(framer_motion_1.motion.div, { initial: 'initial', animate: 'in', exit: 'out', variants: Animation_1.pageVariants, transition: Animation_1.pageTrans, style: Animation_1.pageStyle },
            React.createElement(SignUpElements_1.Div, null,
                React.createElement("h1", null, "Sign Up"),
                React.createElement(Form, { onSubmit: handleSubmit },
                    React.createElement("label", null,
                        "First Name:",
                        React.createElement("input", { type: 'text', placeholder: 'Enter you first name', id: 'firstname', autoComplete: 'off', onChange: (e) => setFirstName(e.target.value), value: firstName, required: 'true' })),
                    React.createElement("br", null),
                    React.createElement("label", null,
                        "Last Name:",
                        React.createElement("input", { type: 'text', placeholder: 'Enter your last name', id: 'lastname', autoComplete: 'off', onChange: (e) => setLastName(e.target.value), value: lastName, required: 'true' })),
                    React.createElement("br", null),
                    React.createElement("label", null,
                        "Email:",
                        React.createElement("input", { type: 'text', placeholder: 'Enter your email', id: 'email', ref: react_1.useRef, autoComplete: 'off', onChange: (e) => setEmail(e.target.value), value: email, required: 'true', "aria-invalid": validEmail ? "false" : "true", onFocus: () => setEmailFocus(true), onBlur: () => setEmailFocus(false) })),
                    React.createElement("br", null),
                    React.createElement("label", null,
                        "Password:",
                        React.createElement("input", { type: 'password', id: 'password', onChange: (e) => setPwd(e.target.value), value: pwd, required: 'true', "aria-invalid": validPwd ? 'false' : 'true', "aria-describedly": 'pwdnote', onFocus: () => setPwdFocus(true), onBlur: () => setPwdFocus(false) })),
                    React.createElement("br", null),
                    React.createElement("label", null,
                        "Contact Number:",
                        React.createElement("input", { type: 'number', placeholder: 'Enter your Mobile Number', id: 'phone', autoComplete: 'off', onChange: (e) => setPhone(e.target.value), value: phone })),
                    React.createElement("p", { id: "pwdNote", className: pwdFocus && !validPwd ? "instructions" : "offscreen" },
                        "8 to 24 Characters.",
                        React.createElement("br", null),
                        "Must include uppercase and lowercase letters, a number and a special Character. ",
                        React.createElement("br", null),
                        "Allowed special characters: ",
                        React.createElement("span", { "aria-label": "exclamation mark" }, "!"),
                        " ",
                        React.createElement("span", { "aria-label": "at symbol" }, "@"),
                        " ",
                        React.createElement("span", { "aria-label": "hashtag" }, "#"),
                        " ",
                        React.createElement("span", { "aria-label": "dollar sign" }, "$"),
                        " ",
                        React.createElement("span", { "aria-label": "percent" }, "%")),
                    React.createElement("br", null),
                    React.createElement("label", null,
                        "Residential Suburb:",
                        React.createElement("input", { type: 'text', placeholder: 'Enter your suburb', id: 'suburb', autoComplete: 'off', onChange: (e) => setSuburb(e.target.value), value: suburb, required: 'true' })),
                    React.createElement("br", null),
                    React.createElement("label", null,
                        "Postcode:",
                        React.createElement("input", { type: 'text', placeholder: 'Enter your postcode', id: 'postcode', autoComplete: 'off', onChange: (e) => setPostcode(e.target.value), value: postcode, required: 'true' })),
                    React.createElement("br", null),
                    React.createElement("label", null,
                        "Keep me in the loop",
                        React.createElement(CheckBox, { type: 'checkbox', className: "checkBox", id: 'keepUpdated', autoComplete: 'off', onChange: (e) => setKeepUpdated(e.target.value) })),
                    React.createElement("button", { disabled: !validEmail ? true : false }, "Register"))))))));
};
exports.default = SignUp;
//# sourceMappingURL=index.js.map