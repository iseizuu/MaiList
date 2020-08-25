const cheer = require('cheerio');
const get = require('node-superfetch');
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
const fetchAnime = `
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

    async fetchAnime(id: string) {
        try {
            const { body } = await get.post(this.baseURL).send({
                variables: {
                    id,
                    type: 'ANIME'
                },
                query: fetchAnime,
            });
            return body.data.Media;
        }
        catch {
            throw new Error(`Anime With ID : ${id} Is Not Found`)
        }
    };
    async srcAnime(param: string) {
        const { body } = await get.post(this.baseURL).send({
            variables: {
                search: param,
                type: 'ANIME'
            },
            query: searchAnime,
        });
        if(!body.data.anime.results.length) {
            throw new Error('Anime not found, Maybe you make a typos?')
        }
        return body.data.anime.results[0].id;
    }
};
export { Client };