export const GENRE_TYPE = {
    MAIN: 0,
    SECONDARY: 1,
    OTHER: 2
}

export class Genre {
    constructor(href, type_ = GENRE_TYPE.MAIN, text=null) {
        this.href = href
        this.type_ = type_
        this.text = text
    }
}