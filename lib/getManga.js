"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manga = void 0;
var Client_1 = require("./structures/Client");
var fetch = new Client_1.Client();
var searchManga = "\n\tquery ($search: String, $type: MediaType, $isAdult: Boolean) {\n\t\tanime: Page (perPage: 10) {\n\t\t\tresults: media (type: $type, isAdult: $isAdult, search: $search) {\n\t\t\t\tid\n\t\t\t\ttitle {\n\t\t\t\t\tenglish\n\t\t\t\t\tromaji\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n";
var resultManga = "\n\tquery media($id: Int, $type: MediaType) {\n\t\tMedia(id: $id, type: $type) {\n\t\t\tid\n\t\t\tidMal\n\t\t\ttitle {\n\t\t\t\tenglish\n\t\t\t\tromaji\n\t\t\t}\n\t\t\tcoverImage {\n\t\t\t\tlarge\n\t\t\t\tmedium\n\t\t\t}\n\t\t\tstartDate { year }\n\t\t\tdescription(asHtml: false)\n\t\t\tsiteUrl\n\t\t\ttype\n\t\t\tstatus\n\t\t\tvolumes\n\t\t\tchapters\n\t\t\tisAdult\n\t\t\tmeanScore\n\t\t}\n\t}\n";
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