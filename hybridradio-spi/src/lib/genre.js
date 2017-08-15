export const GENRE_TYPE = {
    MAIN: 0,
    SECONDARY: 1,
    OTHER: 2
}

export default class Genre {
    constructor(href, typeString = null, text=null) {
        this.href = href
        if (typeString == "secondary") {
            this.type_ = GENRE_TYPE.SECONDARY
        } else if (typeString == "other") {
            this.type_ = GENRE_TYPE.OTHER
        } else {
            this.type_ = GENRE_TYPE.MAIN
        }
        this.text = text
    }
}