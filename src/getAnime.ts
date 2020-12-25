import request from "node-superfetch";
import Client  from "./structures/Client";
import { AnimeStruc, voiceActors } from "./typings";

export default class Anime {
    private client = new Client();
    public anime(query: string): Promise<AnimeStruc> {
        return new Promise((resolve, reject) => {
            this.client.getAnime(query, this.client.config.animeGraphql)
                .then(result => {
                    if (!result.data.anime.results.length) {
                        throw new TypeError("Oh No, Anime Not Found")
                    }
                    resolve(result)
                })
                .catch(reject)
        });
    }

    public Mal(id: string): Promise<string> {
        return this.client.fetchMal(id)
            .then(mal => mal)
    }

    public async voiceActors(query: string): Promise<voiceActors> {
        const animeID = await this.anime(query);
        if (!animeID.data.anime.results.length) throw new TypeError("Sorry, can't find that anime");

        return new Promise((resolve, reject) => {
            void request.post(this.client.baseURL)
                .send(
                    Object.assign({
                        variables: {
                            id: animeID.data.anime.results[0].id
                        },
                        query: this.client.config.voiceActors
                    })
                )
                .then(data => {
                    return resolve((data.body as voiceActors))
                })
                .catch(reject)
        });
    }
}