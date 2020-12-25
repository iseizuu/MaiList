import Client from "./structures/Client";
import { CharStruc } from "./typings";
export default class Character {
    client: Client;
    character(query: string): Promise<CharStruc>;
}
