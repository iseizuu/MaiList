# MaiList (Unrelease)
An Unofficial Anilist API

## Installing
```sh
NONE
```

## Example Usage
###### .anime(string)
* string = Anime title
```js
    const { Anime } = require("mailist");
    const getAnime = new Anime();
    getAnime.then(res => {
        // do it your self
        console.log(res)
    });
```
