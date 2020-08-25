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
    fetchAnime(id: string): Promise<any>;
    srcAnime(param: string): Promise<any>;
}
export { Client };
