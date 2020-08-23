declare class Anime {
    constructor();
    /**
     * Anime Endpoint
     */
    anime(query: string): Promise<any>;
}
export { Anime };
