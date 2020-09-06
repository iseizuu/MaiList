"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manga = void 0;
var Client_1 = require("./structures/Client");
var fetch = new Client_1.Client();
var searchManga = "\nquery ($search: String, $type: MediaType, $isAdult: Boolean) {\n\tanime: Page (perPage: 10) {\n\t\tresults: media (type: $type, isAdult: $isAdult, search: $search) {\n\t\t\tid\n\t\t\ttitle {\n\t\t\t\tenglish\n\t\t\t\tromaji\n\t\t\t}\n\t\t}\n\t}\n}\n";
var resultManga = "\nquery media($id: Int, $type: MediaType) {\n\tMedia(id: $id, type: $type) {\n\t\tid\n\t\tidMal\n\t\ttitle {\n\t\t\tenglish\n\t\t\tromaji\n\t\t}\n\t\tcoverImage {\n\t\t\tlarge\n\t\t\tmedium\n\t\t}\n\t\tstartDate { year }\n\t\tdescription(asHtml: false)\n\t\tsiteUrl\n\t\ttype\n\t\tstatus\n\t\tvolumes\n\t\tchapters\n\t\tisAdult\n\t\tmeanScore\n\t}\n}\n";
var Manga = /** @class */ (function () {
    function Manga() {
    }
    /**
     * @returns {Promise<string>} Manga Endpoint
     */
    Manga.prototype.manga = function (query) {
        return new Promise(function (resolve, reject) {
            var id = fetch.search(query, 'MANGA', searchManga)
                .then(function (res) {
                resolve(fetch.fetch(res, 'MANGA', resultManga));
            })
                .catch(reject);
        });
    };
    ;
    /**
     * Getting The Mal Score || Maybe Usefull
     */
    Manga.prototype.malScore = function (query) {
        return new Promise(function (resolve, reject) {
            var id = fetch.search(query, 'MANGA', searchManga)
                .then(function (res) {
                resolve(fetch.fetchMal(res));
            })
                .catch(reject);
        });
    };
    return Manga;
}());
exports.Manga = Manga;
;
//# sourceMappingURL=getManga.js.map