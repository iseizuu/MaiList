const { Character } = require('../lib/getCharacter');
(async () => {
    const char = new Character()
    const a = await char.character('Kaede')
    console.log(a);
})()
