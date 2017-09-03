import chai from 'chai'
import path from 'path'

var expect = chai.expect
chai.should()

import Group from "../lib/Group"

describe("Group element", () => {
    
    it("exists", () => {
        Group.should.exist
    })
})