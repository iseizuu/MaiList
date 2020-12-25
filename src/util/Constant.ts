export const animeGraphql = `
    query ($search: String, $type: MediaType, $isAdult: Boolean) {
        anime: Page (perPage: 5) {
            results: media (type: $type, isAdult: $isAdult, search: $search) {
                id
                    idMal
                title {
                    english
                    romaji
                }
                coverImage {
                large
                medium
            }
            startDate { day month year }
            description(asHtml: false)
            season
            duration
            genres
            format
            type
            siteUrl
            status
            trailer {
                id
                site
            }
            episodes
            isAdult
            meanScore
            averageScore
            }
        }
    }
`

export const mangaGraphql = `
query ($search: String, $type: MediaType, $isAdult: Boolean) {
    anime: Page (perPage: 5) {
        results: media (type: $type, isAdult: $isAdult, search: $search) {
            id
      			idMal
            title {
                english
                romaji
            }
            coverImage {
            large
            medium
        }
        startDate { day month year }
        description(asHtml: false)        
      	genres
        format
        type
        siteUrl
        status
        trailer {
            id
            site
        }
        chapters
      	volumes
        isAdult
        meanScore
      	averageScore
        }
    }
}
`

export const charGraphql = `
query ($search: String) {
    characters: Page (perPage: 5) {
        results: characters (search: $search) {
            id
            name {
                full
                first
                last
            }
            image {
                large
                medium
            }
            description(asHtml: false)
            siteUrl
            media(page: 1, perPage: 5) {
                edges {
                    node {
                        title {
                            english
                            userPreferred
                        }
                        type
                        siteUrl
                    }
                }
            }
        }
    }
}
`

export const voiceActors = `
query($id : Int){
    Media(id: $id) {
      characters(page: 1) {
        edges {
          node {
            siteUrl
            name {
              full
            }
          }
          role
          voiceActors (language: JAPANESE) {
            siteUrl
            name {
              full
            }
          }
        }
      }
    }
  }
`