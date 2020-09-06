import { Client } from './structures/Client';
const client = new Client()
const req = require('node-superfetch');

const q = `
query ($search: String) {
    characters: Page (perPage: 1) {
	     results: characters (search: $search) { id }
    }
}
`;
const s = `
query ($id: Int!) {
	Character (id: $id) {
		id
		name {
			first
			last
		}
		image {
			large
			medium
		}
		description(asHtml: false)
		siteUrl
		media(page: 1, perPage: 5) {
			edges {
				node {
					title {
						english
						userPreferred
					}
					type
					siteUrl
				}
			}
		}
	}
}
`;
class Character {
    public constructor() {
    }
    /**
     * @returns {Promise<string>} Search Character
     */
    public character(query: string) {
        return new Promise(async (resolve, reject) => {
            const id = client.searchChar(query, q)
            .then(async res => {
                resolve(client.fetchChar(res, s));
            })
            .catch(reject)
        });
    };
};

export { Character };