import { Client } from './structures/Client';
const getAnime = new Client()

class Anime {
    public constructor() {
    }
    /**
     * @returns {Promise<string>} Anime Endpoint
     */
    public anime(query: string) {
        return new Promise((resolve, reject) => {
            const id = getAnime.srcAnime(query)
            .then(res => {
                getAnime.fetchMal(res)
                resolve(getAnime.fetchAnime(res));
            })
            .catch(reject)
        });
    };

    /**
     * Getting The Mal Score || Maybe Usefull
     */
    public malScore(query : string) 
    {
        return new Promise((resolve, reject) => {
            const id = getAnime.srcAnime(query)
            .then(res => {
                resolve(getAnime.fetchMal(res));
            })
            .catch(reject)
        });
    }
};
export { Anime };