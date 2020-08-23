const { Anime } = require('../lib/getAnime');

(async () => {
    const test = new Anime()
    const anime = await test.anime('Bunny Girl')
    console.log(anime)
})()