"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anime = void 0;
var Client_1 = require("./structures/Client");
var fetch = new Client_1.Client();
var searchAnime = "\nquery ($search: String, $type: MediaType, $isAdult: Boolean) {\n    anime: Page (perPage: 10) {\n        results: media (type: $type, isAdult: $isAdult, search: $search) {\n            id\n            title {\n                english\n                romaji\n            }\n        }\n    }\n}\n";
var resultAnime = "\nquery media($id: Int, $type: MediaType) {\n    Media(id: $id, type: $type) {\n        id\n        idMal\n        title {\n            english\n            romaji\n        }\n        coverImage {\n            large\n            medium\n        }\n        startDate { year }\n        description(asHtml: false)\n        season\n        type\n        siteUrl\n        status\n        episodes\n        isAdult\n        meanScore\n    }\n}\n";
var Anime = /** @class */ (function () {
    function Anime() {
    }
    /**
     * @returns {Promise<string>} Anime Endpoint
     */
    Anime.prototype.anime = function (query) {
        return new Promise(function (resolve, reject) {
            var id = fetch.search(query, 'ANIME', searchAnime)
                .then(function (res) {
                resolve(fetch.fetch(res, 'ANIME', resultAnime));
            })
                .catch(reject);
        });
    };
    ;
    /**
     * Getting The Mal Score || Maybe Usefull
     */
    Anime.prototype.malScore = function (query) {
        return new Promise(function (resolve, reject) {
            var id = fetch.search(query, 'ANIME', searchAnime)
                .then(function (res) {
                resolve(fetch.fetchMal(res));
            })
                .catch(reject);
        });
    };
    return Anime;
}());
exports.Anime = Anime;
;
//# sourceMappingURL=getAnime.js.map