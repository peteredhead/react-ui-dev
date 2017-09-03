import chai from 'chai'
import path from 'path'

var expect = chai.expect
chai.should()

import RadioDNS from "../lib/RadioDNS"

describe("RadioDNS class", () => {
    
    it("exists", () => {
        RadioDNS.should.exist
    })
})