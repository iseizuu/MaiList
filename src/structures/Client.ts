const cheer = require('cheerio');
const get = require('node-superfetch');
const { author, version } = require('../../package.json')

interface ClientOpt  {
    uri: string
};

class Client {
    private baseURL : string;
    constructor(opt: ClientOpt = {
        uri: 'https://graphql.anilist.co/'
    })
    {
        this.baseURL = opt.uri;
    };

    /**
     * fetchMal
     */
    public async fetchMal(id : string) {
        try {
            const { text } = await get.get(`https://myanimelist.net/anime/${id}`);
            const mal = cheer.load(text);
            return mal('span[itemprop="ratingValue"]').first().text();
        }
        catch {
            return null;
        }
        
    }

    async fetch(id: string, type: string, graphql: string) {
        try {
            const { body } = await get.post(this.baseURL).send({
                variables: {
                    id,
                    type: type
                },
                query: graphql,
            });
            return body.data.Media;
        }
        catch {
            throw new Error(`Anime With ID : ${id} Is Not Found`)
        }
    };

    async search(param: string, type: string, graphql: string) {
        const { body } = await get.post(this.baseURL).send({
            variables: {
                search: param,
                type: type
            },
            query: graphql,
        });
        if(!body.data.anime.results.length) {
            throw new Error('Anime not found, Maybe you make a typos?')
        }
        return body.data.anime.results[0].id;
    }

    async searchChar(param: string, graphql: string) {
		const { body } = await get.post(this.baseURL).send({
				variables: { search: param },
				query: graphql,
			});
		if (!body.data.characters.results.length) {
            throw new Error('Cant find that character')
        }
		return body.data.characters.results[0].id;
	}

	async fetchChar(id: string, graphql: string) {
        const { body } = await get.post(this.baseURL).send({
            variables: { id },
            query: graphql,
        });
        return body.data.Character;
    }
};
export { Client, author, version };