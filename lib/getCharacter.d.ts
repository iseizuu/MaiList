declare class Character {
    constructor();
    /**
     * @returns {Promise<string>} Search Character
     */
    character(query: string): Promise<unknown>;
}
export { Character };
