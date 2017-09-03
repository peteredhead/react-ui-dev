import chai from 'chai'
import path from 'path'

var expect = chai.expect
chai.should()

import ServiceProvider from "../lib/ServiceProvider"

describe("ServiceProvider class", () => {
    
    it("exists", () => {
        ServiceProvider.should.exist
    })
})