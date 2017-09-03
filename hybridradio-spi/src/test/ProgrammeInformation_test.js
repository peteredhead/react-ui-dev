import chai from 'chai'
import path from 'path'

var expect = chai.expect
chai.should()

import ProgrammeInformation from "../lib/ProgrammeInformation"

describe("ProgrammeInformation element", () => {
    
    it("exists", () => {
        ProgrammeInformation.should.exist
    })
})