declare class Manga {
    constructor();
    /**
     * @returns {Promise<string>} Manga Endpoint
     */
    manga(query: string): Promise<unknown>;
    /**
     * Getting The Mal Score || Maybe Usefull
     */
    malScore(query: string): Promise<unknown>;
}
export { Manga };
