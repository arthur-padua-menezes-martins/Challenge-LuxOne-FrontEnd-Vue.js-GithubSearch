"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
exports.mockedAxiosResult = {
    status: 200,
    data: {}
};
exports.makeMockedAxios = function () {
    var mocked = axios_1.default;
    mocked.get.mockResolvedValue(exports.mockedAxiosResult);
    return mocked;
};
//# sourceMappingURL=axios-mock.js.map