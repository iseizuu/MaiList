# MaiList (Beta)
An Unofficial Anilist API Wrapper

## Installing
[![Version](https://nodei.co/npm/mailist.png?compact=true)](https://nodei.co/npm/mailist)
```sh
# npm

npm i mailist
yarn add mailist
```

## Example Usage

#### Anime
* .anime(string)
* string = Anime title
```js
const { Anime } = require("mailist");
const getAnime = new Anime();
getAnime.anime('Kimi No Nawa').then(res => {
    // do it your self
    console.log(res)
});
```
#### Manga
* .manga(string)
* string = Manga title
```js
const { Manga } = require("mailist");
const getManga = new Manga();
getManga.manga('My Hero Academia').then(res => {
    // do it your self
    console.log(res)
});
```
#### Character
* .character(string)
* string = Character Name
```js
const { Character } = require("mailist");
const getChar = new Character();
getChar.character('Mai Sakurajima').then(res => {
    // do it your self
    console.log(res)
});
```
# Additional
#### Fetch the anime Mal Score
```js
(async () => {
    const { Anime } = require("mailist");
    const getAnime = new Anime();
    const resultAnime = await getAnime.anime('Bunny Girl');
    const mal = await resultAnime.malScore(resultAnime.id) // added mal score
    console.log(resultAnime, mal);
})()
});
```