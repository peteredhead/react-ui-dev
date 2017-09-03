import chai from 'chai'
import path from 'path'

var expect = chai.expect
chai.should()

import Genre, {GENRE_TYPE} from "../lib/Genre"

describe("Genre element", () => {
    
    it("exists", () => {
        Genre.should.exist
    }),
    
    it("sets the genre type to main by default", () => {
        const genre = new Genre("urn:tva:metadata:cs:ContentCS:2002:3.6.9")
        genre.type_.should.equal(GENRE_TYPE.MAIN)
    }),
    it("correctly sets the genre type for a secondary genre", () => {
        const genre = new Genre("urn:tva:metadata:cs:ContentCS:2002:3.6.9", "secondary")
        genre.type_.should.equal(GENRE_TYPE.SECONDARY)
    }), 
    it("correctly sets the genre type for an other genre", () => {
        const genre = new Genre("urn:tva:metadata:cs:ContentCS:2002:3.6.9", "other")
        genre.type_.should.equal(GENRE_TYPE.OTHER)
    })
})