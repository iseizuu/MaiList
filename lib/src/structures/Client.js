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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var package_json_1 = require("../../package.json");
var get = require('node-superfetch');
var searchAnime = "\nquery ($search: String, $type: MediaType, $isAdult: Boolean) {\n    anime: Page (perPage: 10) {\n        results: media (type: $type, isAdult: $isAdult, search: $search) {\n            id\n            title {\n                english\n                romaji\n            }\n        }\n    }\n}\n";
var fetchAnime = "\nquery media($id: Int, $type: MediaType) {\n    Media(id: $id, type: $type) {\n        id\n        idMal\n        title {\n            english\n            romaji\n        }\n        coverImage {\n            large\n            medium\n        }\n        startDate { year }\n        description(asHtml: false)\n        season\n        type\n        siteUrl\n        status\n        episodes\n        isAdult\n        meanScore\n    }\n}\n";
;
var Client = /** @class */ (function () {
    function Client(opt) {
        if (opt === void 0) { opt = {
            uri: 'https://graphql.anilist.co/'
        }; }
        this.baseURL = opt.uri;
    }
    ;
    /**
     * Package version
     * @readonly
     * @returns {string}
     */
    Client.prototype.version = function () {
        return package_json_1.version;
    };
    Client.prototype.fetchAnime = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var body, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, get.post(this.baseURL).send({
                                variables: {
                                    id: id,
                                    type: 'ANIME'
                                },
                                query: fetchAnime,
                            })];
                    case 1:
                        body = (_b.sent()).body;
                        return [2 /*return*/, body.data.Media];
                    case 2:
                        _a = _b.sent();
                        throw new Error("Anime With ID : " + id + " Is Not Found");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    Client.prototype.srcAnime = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!param) {
                            throw new TypeError('Pleasee, dont let this parameter is blank or empty');
                        }
                        return [4 /*yield*/, get.post(this.baseURL).send({
                                variables: {
                                    search: param,
                                    type: 'ANIME'
                                },
                                query: searchAnime,
                            })];
                    case 1:
                        body = (_a.sent()).body;
                        if (!body.data.anime.results.length) {
                            throw new Error('Anime not found, Maybe you make a typos?');
                        }
                        return [2 /*return*/, body.data.anime.results[0].id];
                }
            });
        });
    };
    return Client;
}());
exports.Client = Client;
;
//# sourceMappingURL=Client.js.map