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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useFetchApi(API_URL) {
    const [data, setData] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        setLoading(true);
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(API_URL, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok)
                    throw err('Did not recieve Database update as expected');
                const resJson = yield response.json();
                setData(resJson);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        });
        fetchData();
    }, []);
    return {
        data, loading, error
    };
}
;
exports.default = useFetchApi;
//# sourceMappingURL=useFetchApi.js.map