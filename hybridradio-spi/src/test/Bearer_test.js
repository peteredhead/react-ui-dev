import chai from 'chai'
import path from 'path'

var expect = chai.expect
chai.should()

import Bearer from "../lib/Bearer"

describe("Bearer element", () => {
    
    it("exists", () => {
        Bearer.should.exist
    })
})
    