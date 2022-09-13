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
require("./ContactElements.js");
const genID_1 = __importDefault(require("../../Components/functions/genID"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
const ContactElements_1 = require("./ContactElements");
const NavBarElements_1 = require("../../Components/NavBar/NavBarElements");
const framer_motion_1 = require("framer-motion");
const Animation_1 = require("../../Components/NavBar/Animation");
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const CONTACT_URL = 'http://64.225.64.109/Contact';
const messageID = (0, genID_1.default)(100, 999);
const Contact = () => {
    const [name, setName] = (0, react_1.useState)('');
    const [phone, setPhone] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [message, setMessage] = (0, react_1.useState)('');
    const [success, setSuccess] = (0, react_1.useState)(false);
    const [validEmail, setValidEmail] = (0, react_1.useState)(false);
    const [errMsg, setErrMsg] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        const formData = {
            id: messageID,
            Name: name,
            Phone: phone,
            Email: email,
            Message: message
        };
        e.preventDefault();
        const verifyEmail = EMAIL_REGEX.test(email);
        if (!verifyEmail) {
            setErrMsg('Invalid email');
            return;
        }
        try {
            const res = yield fetch(CONTACT_URL, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });
            console.log(res.status);
            setSuccess(true);
            setEmail('');
            setPhone('');
            setMessage('');
        }
        catch (err) {
            if (!(err === null || err === void 0 ? void 0 : err.res)) {
                setErrMsg('No server response');
            }
            else if (err.res) {
                setErrMsg('The email entered is already registered');
            }
            else {
                setErrMsg(`Registration Failed. Error: ${err}`);
            }
        }
    });
    return (React.createElement(React.Fragment, null, success ? (React.createElement(ContactElements_1.ExContainer, null,
        React.createElement(framer_motion_1.motion.div, { initial: 'initial', animate: 'in', exit: 'out', variants: Animation_1.pageVariants, transition: Animation_1.pageTrans, style: Animation_1.pageStyle },
            React.createElement(ContactElements_1.Registered, null,
                React.createElement("h1", null, "Message successfully sent!"),
                React.createElement("hr", null),
                React.createElement("p", null,
                    "Thank you for your message. ",
                    React.createElement("br", null),
                    "Our team will be in touch asap to assist."),
                React.createElement("p", null,
                    "In the meantime, head over to our early registration page.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "People that register early will get pre-launch access to AirGuard to test it out."),
                React.createElement(NavBarElements_1.NavBtnLink, { className: 'NavBtnLink', to: '/SignUp' }, "Early Registration"))))) : (React.createElement(ContactElements_1.ExContainer, null,
        React.createElement(framer_motion_1.motion.div, { initial: 'initial', animate: 'in', exit: 'out', variants: Animation_1.pageVariants, transition: Animation_1.pageTrans, style: Animation_1.pageStyle },
            React.createElement(ContactElements_1.Section, null,
                React.createElement("h1", null, "Contact Us"),
                React.createElement(ContactElements_1.Form, { onSubmit: handleSubmit },
                    React.createElement("label", null,
                        "Name:",
                        React.createElement("input", { type: 'text', placeholder: 'Enter Full Name', id: 'fullname', autoComplete: 'off', onChange: (e) => setName(e.target.value), value: name, require: 'true' })),
                    React.createElement("br", null),
                    React.createElement("label", null,
                        "Phone:",
                        React.createElement("input", { type: 'text', placeholder: 'Enter Contact Number', id: 'phone', autoComplete: 'off', onChange: (e) => setPhone(e.target.value), value: phone })),
                    React.createElement("br", null),
                    React.createElement("label", null,
                        "Email:",
                        React.createElement("input", { type: 'text', placeholder: 'Enter Contact Email', id: 'email', autoComplete: 'off', onChange: (e) => setEmail(e.target.value), value: email, require: 'true' })),
                    React.createElement("br", null),
                    React.createElement("label", null,
                        "Message:",
                        React.createElement("textarea", { rows: '4', placeholder: 'Type your message here', id: 'message', autoComplete: 'off', onChange: (e) => setMessage(e.target.value), require: 'true' })),
                    React.createElement("br", null),
                    React.createElement("button", { disabled: !validEmail ? true : false }, "Send Message"))),
            React.createElement(ContactElements_1.Section2, null,
                React.createElement("h2", null, "Developers Information"),
                React.createElement("p", null, "Bradley Laskey"),
                React.createElement("p", null, "Phone: 0413 801 668"),
                React.createElement("p", null, "Email: bradley@b-laskey.com"),
                React.createElement("p", null,
                    React.createElement("a", { href: 'https://www.linkedin.com/in/bradley-l-13aa96133/', target: '_blank', alt: 'Bradley Laskey LinkedIn Profile' },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faLinkedin, size: '2x' })),
                    ' ',
                    React.createElement("a", { href: 'https://github.com/BraddlesUnravels', target: '_blank', alt: 'Bradley Laskey GitHub Profile' },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faGithub, size: '2x' })))))))));
};
exports.default = Contact;
//# sourceMappingURL=index.js.map