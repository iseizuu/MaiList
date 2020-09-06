const { Manga } = require('../lib/getManga');
(async () => {
    const r = new Manga()
    const a = await r.manga('Baruto')
    console.log(a);
})()
