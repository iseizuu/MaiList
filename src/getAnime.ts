import { Client } from './structures/Client';
const fetch = new Client();
const searchAnime = `
query ($search: String, $type: MediaType, $isAdult: Boolean) {
    anime: Page (perPage: 10) {
        results: media (type: $type, isAdult: $isAdult, search: $search) {
            id
            title {
                english
                romaji
            }
        }
    }
}
`;
const resultAnime = `
query media($id: Int, $type: MediaType) {
    Media(id: $id, type: $type) {
        id
        idMal
        title {
            english
            romaji
        }
        coverImage {
            large
            medium
        }
        startDate { year }
        description(asHtml: false)
        season
        type
        siteUrl
        status
        episodes
        isAdult
        meanScore
    }
}
`;

class Anime {
    public constructor() {
    }
    /**
     * @returns {Promise<string>} Anime Endpoint
     */
    public anime(query: string) {
        return new Promise((resolve, reject) => {
            const id = fetch.search(query, 'ANIME', searchAnime)
            .then(res => {
                resolve(fetch.fetch(res, 'ANIME', resultAnime));
            })
            .catch(reject)
        });
    };

    /**
     * Getting The Mal Score || Maybe Usefull
     */
    public malScore(query : string,) {
        return new Promise((resolve, reject) => {
            const id = fetch.search(query, 'ANIME', searchAnime)
            .then(res => {
                resolve(fetch.fetchMal(res));
            })
            .catch(reject)
        });
    }
};
export { Anime };