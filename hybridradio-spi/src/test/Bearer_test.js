import chai from 'chai'
import path from 'path'

var expect = chai.expect
chai.should()

import Bearer from "../lib/Bearer"

describe("Bearer element", () => {
    
    it("exists", () => {
        Bearer.should.exist
    }),
    it('sets the cost to undefined if an invalid one is specified', () => {
        let bearer = new Bearer(1, -1);
        (bearer.cost === undefined).should.be.true
    
    })
    it("sets the bitrate to undefined if an invalid one is specified", () => {
        let bearer = new Bearer(1, 0, null, -1);
        (bearer.bitrate === undefined).should.be.true
    }),
    it("sets the offset to 0 if an invalid one is specified", () => {
        let bearer = new Bearer(1, 0, null, 0, -1)
        bearer.offset.should.equal(0)
    })
})
    