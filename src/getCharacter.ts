import Client  from "./structures/Client";
import { CharStruc } from "./typings";

export default class Character {
    private client = new Client();
    public character(query: string): Promise<CharStruc> {
        return new Promise((resolve, reject) => {
            this.client.getChar(query, this.client.config.charGraphql)
                .then(result => {
                    if (!result.data.characters.results.length) {
                        throw new TypeError(`Oh No, Character ${query} is Not Found`)
                    }
                    resolve(result)
                })
                .catch(reject)
        })
    }
}