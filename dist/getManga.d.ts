import Client from "./structures/Client";
import { MangaStruc } from "./typings";
export default class Manga {
    client: Client;
    manga(query: string): Promise<MangaStruc>;
    Mal(id: string): Promise<string>;
}
