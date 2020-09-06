import { Client } from './structures/Client';
const fetch = new Client()
const searchManga = `
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
const resultManga = `
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
		siteUrl
		type
		status
		volumes
		chapters
		isAdult
		meanScore
	}
}
`;

class Manga {
    public constructor() {
    }
    /**
     * @returns {Promise<string>} Manga Endpoint
     */
    public manga(query: string) {
        return new Promise((resolve, reject) => {
            const id = fetch.search(query, 'MANGA', searchManga)
            .then(res => {
                resolve(fetch.fetch(res, 'MANGA', resultManga));
            })
            .catch(reject)
        });
    };

    /**
     * Getting The Mal Score || Maybe Usefull
     */
    public malScore(query : string,) {
        return new Promise((resolve, reject) => {
            const id = fetch.search(query, 'MANGA', searchManga)
            .then(res => {
                resolve(fetch.fetchMal(res));
            })
            .catch(reject)
        });
    }
};
export { Manga };