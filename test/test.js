const { Anime } = require('../lib/getAnime');
const { Client } = require('../lib/structures/Client');
(async () => {
    const test = new Anime()
    const anime = await test.anime('Bunny Girl')
    console.log(anime)
})();