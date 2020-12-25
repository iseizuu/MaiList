const { Anime, Character } = require("../dist");
const get = new Anime();

/**
 * Getting the anime data
 * @returns {Promise<import("../dist/typings").AnimeStruc>}
 */
function getAnime() {
    get.anime("Majo No Tabi-Tabi")
        .then(res => {
            console.log(res.data.anime.results[0])
        });
}
// getAnime()

/**
 * Getting anime data with Mal in one object
 */
function getAnimeMal() {
    get.anime("Majo No Tabi-Tabi")
        .then(async res => {
            const mal = await get.Mal(res.data.anime.results[0].idMal);
            console.log(Object.assign({
                res: res.data.anime.results[0], // this is the anime result
                mal: mal // this is mal result
            }))
        });
}
getAnimeMal()

function getVoiceActor() {
    get.voiceActors("The Quintessential Quintuplets")
        .then(res => {
            console.log(res.data.Media.characters.edges[0])
        });
}
// getVoiceActor()

function getChar() {
    const char = new Character();
    char.character("Elaina")
        .then(res => {
            console.log(res.data.characters.results[0])
        }) 
}
// getChar()