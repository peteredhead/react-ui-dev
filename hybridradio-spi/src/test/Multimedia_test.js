import chai from 'chai'
import path from 'path'

var expect = chai.expect
chai.should()

import Multimedia, {LOGO} from "../lib/Multimedia"

const mimeValue = "image/png"

describe("Multimedia element", () => {
    
    it("exists", () => {
        Multimedia.should.exist
    }),
    
    describe("when the type is logo_unrestricted", () => {
        const url = "http://via.placeholder.com/350x150"
        const width = 350
        const height = 150
        const multimedia = new Multimedia(url, "en", mimeValue, "logo_unrestricted", width, height)
        it("has the correct type set", () => {
            multimedia.type_.should.equal(LOGO.UNRESTRICTED)  
        }),
        it("has the correct mime value", () => {
            multimedia.mimeValue.should.equal(mimeValue)
        }),
        it("has the correct width", () => {
            multimedia.width.should.equal(width)
        }),
        it("has the correct height", () => {
            multimedia.height.should.equal(height)
        })
    }),
    describe("when the type is logo_colour_square", () => {
        const url = "http://via.placeholder.com/32x32"
        const multimedia = new Multimedia(url, "en", mimeValue, "logo_colour_square")
        it("has the correct type set", () => {
            multimedia.type_.should.equal(LOGO.COLOUR_SQUARE)  
        }),
        it("has the correct mime value", () => {
            multimedia.mimeValue.should.equal(mimeValue)
        }),
        it("has the correct width", () => {
            multimedia.width.should.equal(32)
        }),
        it("has the correct height", () => {
            multimedia.height.should.equal(32)
        })
    }),
    describe("when the type is logo_colour_rectangle", () => {
        const url = "http://via.placeholder.com/32x32"
        const multimedia = new Multimedia(url, "en", mimeValue, "logo_colour_rectangle")
        it("has the correct type set", () => {
            multimedia.type_.should.equal(LOGO.COLOUR_RECTANGLE)  
        }),
        it("has the correct mime value", () => {
            multimedia.mimeValue.should.equal(mimeValue)
        }),
        it("has the correct width", () => {
            multimedia.width.should.equal(112)
        }),
        it("has the correct height", () => {
            multimedia.height.should.equal(32)
        })
    }),
    describe("when the type is undefined", () => {
        const url = "http://via.placeholder.com/350x150"
        const width = 350
        const height = 150
        const multimedia = new Multimedia(url, "en", mimeValue, undefined, width, height)
        it("has the no type set", () => {
            (multimedia.type_ === undefined).should.be.true
        }),
        it("has the correct mime value", () => {
            multimedia.mimeValue.should.equal(mimeValue)
        }),
        it("has the correct width", () => {
            multimedia.width.should.equal(width)
        }),
        it("has the correct height", () => {
            multimedia.height.should.equal(height)
        })
    })
})