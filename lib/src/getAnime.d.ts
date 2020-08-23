declare class Anime {
    constructor();
    /**
     * @returns {Promise<string>} Anime Endpoint
     */
    anime(query: string): Promise<unknown>;
}
export { Anime };
