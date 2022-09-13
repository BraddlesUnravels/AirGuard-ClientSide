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
function fetchMongoDB() {
    const [data, setData] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const dataRequest = JSON.stringify({
        "collection": "airQual",
        "database": "AIRMON_DB",
        "dataSource": "AirMon-VIC",
        "projection": {
            "_id": 1
        }
    });
    const API_URL = 'https://data.mongodb-api.com/app/airguard-txito/endpoint/data/v1/action/findOne';
    (0, react_1.useEffect)(() => {
        setLoading(true);
        const fetchMongoData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(API_URL, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Request-Headers': '*',
                        'api-key': 'l6Nq9x9pGrZmjHa0lOyn0vrIohk3bQOvzNIK7vE2rKkaG8S94uSMwnVRjoKcEaoT',
                        'Accept': 'application/json',
                    },
                    body: dataRequest,
                });
                if (!res.ok)
                    throw error('MongoDB request failed');
                const resJson = yield res.json();
                console.log(res);
                console.log(resJson);
                setData(resJson);
            }
            catch (err) {
                setError(err.message);
                console.log(err);
            }
            finally {
                setLoading(false);
            }
            ;
        });
        fetchMongoData();
    }, []);
    return {
        data, loading, error
    };
}
;
exports.default = fetchMongoDB;
//# sourceMappingURL=fetchMongoDB.js.map