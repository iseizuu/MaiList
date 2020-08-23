import { Client } from './structures/Client';
const getAnime = new Client()

class Anime {
    public constructor() {
    }
    /**
     * Anime Endpoint
     */
    public async anime(query: string) {
        const id = await getAnime.srcAnime(query);
        if(!id) {
            return Error('Anime Not Found')
        }
        const result = getAnime.fetchAnime(id);
        return result;
    };
};
export { Anime };