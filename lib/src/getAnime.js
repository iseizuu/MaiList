"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anime = void 0;
var Client_1 = require("./structures/Client");
var getAnime = new Client_1.Client();
var Anime = /** @class */ (function () {
    function Anime() {
    }
    /**
     * @returns {Promise<string>} Anime Endpoint
     */
    Anime.prototype.anime = function (query) {
        return new Promise(function (resolve, reject) {
            var id = getAnime.srcAnime(query)
                .then(function (res) {
                resolve(getAnime.fetchAnime(res));
            })
                .catch(reject);
        });
    };
    ;
    return Anime;
}());
exports.Anime = Anime;
;
//# sourceMappingURL=getAnime.js.map