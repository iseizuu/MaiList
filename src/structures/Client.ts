import request from "node-superfetch";
import cheerio from "cheerio";
import { AnimeStruc, CharStruc, MangaStruc } from "../typings";
import * as config from "../util/Constant"

interface ClientOpt  {
    uri: string
}

export default class Client {
    public readonly baseURL : string;
    public readonly config = config;
    public constructor(opt: ClientOpt = {
        uri: "https://graphql.anilist.co/"
    })
    {
        this.baseURL = opt.uri;
    }

    public getAnime(query: string, hqlRequest: string): Promise<AnimeStruc> {
        return new Promise((resolve, reject) => {
            void request.post(this.baseURL)
                .send(
                    Object.assign({
                        variables: {
                            search: query,
                            type: "ANIME"
                        },
                        query: hqlRequest
                    })
                )
                .then(data => {
                    return resolve((data.body as AnimeStruc))
                })
                .catch(reject)
        })
    }

    public getManga(query: string, hqlRequest: string): Promise<MangaStruc> {
        return new Promise((resolve, reject) => {
            void request.post(this.baseURL)
                .send(
                    Object.assign({
                        variables: {
                            search: query,
                            type: "MANGA"
                        },
                        query: hqlRequest
                    })
                )
                .then(data => {
                    return resolve((data.body as MangaStruc))
                })
                .catch(reject)
        })
    }

    public getChar(query: string, hqlRequest: string): Promise<CharStruc> {
        return new Promise((resolve, reject) => {
            void request.post(this.baseURL)
                .send(
                    Object.assign({
                        variables: {
                            search: query
                        },
                        query: hqlRequest
                    })
                )
                .then(data => {
                    return resolve((data.body as CharStruc))
                })
                .catch(reject)
        })
    }

    public fetchMal(id : string): Promise<string> {
        return new Promise((resolve, reject) => {
            request.get(`https://myanimelist.net/anime/${parseInt(id)}`)
                .then(text => {
                    resolve(
                        cheerio.load(text.text)("span[itemprop=\"ratingValue\"]").first().text()
                    )
                })
                .catch(reject)
        });
        
    }
}