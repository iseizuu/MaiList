# MaiList (Unrelease)
An Unofficial Anilist API

## Installing
[![Version](https://nodei.co/npm/mailist.png?compact=true)](https://nodei.co/npm/mailist)
```sh
# npm
npm i mailist
yarn add mailist
```

## Example Usage
#### .anime(string)
* string = Anime title
```js
const { Anime } = require("mailist");
const getAnime = new Anime();
getAnime.then(res => {
    // do it your self
    console.log(res)
});
```
