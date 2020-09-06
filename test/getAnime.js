const { Anime } = require('../lib/getAnime');
(async () => {
   const q = new Anime()
   const a = await q.anime('Bunny Girl')
   const mal = await q.malScore(a.id)
   console.log(a);
})()