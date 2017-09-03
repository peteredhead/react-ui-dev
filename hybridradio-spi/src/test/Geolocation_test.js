import chai from 'chai'
import path from 'path'

var expect = chai.expect
chai.should()

import Geolocation from "../lib/Geolocation"

describe("Geolocation class", () => {
    
    it("exists", () => {
        Geolocation.should.exist
    })
})