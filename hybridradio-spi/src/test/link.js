import chai from 'chai'
import path from 'path'

import moment from 'moment'

var expect = chai.expect
chai.should()


import Link from "../lib/link.js"

// let Link = require(path.join(__dirname, '../lib', 'link.js'))

console.log("%o", Link)

describe("Link element", () => {
    
     beforeEach(() => {
      // Create a new object before every test.
      
    });
    
    it("returns the correct uri ", () => {
        let link = new Link("http://example.net/");
        link.uri.should.equal("http://example.net/")
    })
})

