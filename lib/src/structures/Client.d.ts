interface ClientOpt {
    uri: string;
}
declare class Client {
    private baseURL;
    constructor(opt?: ClientOpt);
    /**
     * Package version
     * @readonly
     * @returns {string}
     */
    version(): string;
    fetchAnime(id: string): Promise<any>;
    srcAnime(param: string): Promise<any>;
}
export { Client };
