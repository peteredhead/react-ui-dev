import chai from 'chai'
import path from 'path'

import moment from 'moment'

var expect = chai.expect
chai.should()

import Link from "../lib/Link"

describe("Link element", () => {
    
     beforeEach(() => {
      // Create a new object before every test.
      
    });
    
    it("exists", () => {
        Link.should.exist
    })
    
    it("returns the correct uri ", () => {
        let link = new Link("http://example.net/")
        link.uri.should.equal("http://example.net/")
    })
    
    it("returns the mime value if set", () => {
        let link = new Link(
            "http://example.net/", 
            "text/html" 
        )
        link.mimeValue.should.equal("text/html")
    })
    it ("returns a null mime value if none is set", () =>{
        let link = new Link("http://example.net/");
        (link.mimeValue === null).should.be.true
    })
    it("returns the language if set", () => {
        let link = new Link(
            "http://example.net/",
            null,
            "en" 
        )
        link.lang.should.equal("en")
    })
    it ("returns a null language if none is set", () =>{
        let link = new Link("http://example.net/");
        (link.lang === null).should.be.true
    })
    it("returns the description if set", () => {
        let link = new Link(
            "http://example.net/",
            null,
            "Link to website" 
        )
        link.lang.should.equal("Link to website")
    })
    it ("returns a null description if none is set", () =>{
        let link = new Link("http://example.net/");
        (link.description === null).should.be.true
    })
    it ("returns a link is no expiry time is set", () => {
    
    })
    it ("returns a link if a future expiry time is set", () => {
        
    })
    it ("returns null if a historical expiry time is set", () => {
        
    })
    
})

