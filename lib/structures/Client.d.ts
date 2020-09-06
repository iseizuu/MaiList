declare const author: any, version: any;
interface ClientOpt {
    uri: string;
}
declare class Client {
    private baseURL;
    constructor(opt?: ClientOpt);
    /**
     * fetchMal
     */
    fetchMal(id: string): Promise<any>;
    fetch(id: string, type: string, graphql: string): Promise<any>;
    search(param: string, type: string, graphql: string): Promise<any>;
    searchChar(param: string, graphql: string): Promise<any>;
    fetchChar(id: string, graphql: string): Promise<any>;
}
export { Client, author, version };
