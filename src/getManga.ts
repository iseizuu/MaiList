import Client  from "./structures/Client";
import { MangaStruc } from "./typings";

export default class Manga {
    private client = new Client();
    public manga(query: string): Promise<MangaStruc> {
        return new Promise((resolve, reject) => {
            this.client.getManga(query, this.client.config.mangaGraphql)
                .then(result => {
                    if (!result.data.anime.results.length) {
                        throw new TypeError(`Oh No, Manga with title ${query} is Not Found`)
                    }
                    resolve(result)
                })
                .catch(reject)
        })
    }

    public Mal(id: string): Promise<string> {
        return this.client.fetchMal(id)
            .then(mal => mal)
    }
}