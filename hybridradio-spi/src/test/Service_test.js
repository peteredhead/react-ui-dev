import chai from 'chai'
import path from 'path'
import {DOMParser} from 'xmldom'
import moment from 'moment'

var expect = chai.expect
chai.should()

import Service from "../lib/Service"
import {GENRE_TYPE} from "../lib/Genre"

import serviceXml from "./assets/serviceXml"

var parser = new DOMParser()
const data = parser.parseFromString(serviceXml(), "text/xml");

var service = new Service()
service.parse(data.childNodes[0])

describe("Service element parser", () => {

    it("exists", () => {
        Service.should.exist
    }),

    describe("bearers", () => {
        it("has the correct number of bearers", () => {
            service.bearers.length.should.equal(4)
        }),
        it("parses the bearer correctly", () => {
            const bearer = service.bearers[0]
            bearer.id.should.equal("dab:ce1.c123.c456.0")
            bearer.cost.should.equal(20)
            bearer.mimeValue.should.equal("audio/mpeg")
            bearer.offset.should.equal(2500)
        }),
        it("treats an undefined offset as zero", () => {
            const bearer = service.bearers[1]
            bearer.offset.should.equal(0)
        })

    }),
    describe("genres", () => {
       it("has the correct number of genres", () => {
           service.genres.length.should.equal(3)
       }),
       it("parses the genres correctly", () => {
           const genre = service.genres[1]
           genre.href.should.equal("urn:tva:metadata:cs:ContentCS:2004:3.6.10")

       }),
       it("assumes a genre with no type specified is the main genre", () =>{
           const genre = service.genres[0]
           genre.type_.should.equal(GENRE_TYPE.MAIN)
       }),
       it("parses the secondary genre type correctly", () => {
           const genre = service.genres[1]
           genre.type_.should.equal(GENRE_TYPE.SECONDARY)
       }),
       it("parses the other genre type correctly", () => {
           const genre = service.genres[2]
           genre.type_.should.equal(GENRE_TYPE.OTHER)
       })
    }),
    describe("keywords", () => {
        it("has the correct number of keywords", () => {
            service.keywords.length.should.equal(4)
        }),
        it("parses the keywords correctly", () => {
            service.keywords[0].should.equal("test")
            service.keywords[1].should.equal("service")
            service.keywords[2].should.equal("radio")
            service.keywords[3].should.equal("spi")
        })
    }),
    describe("links", () => {
        it("has the correct number of links", () => {
            service.links.length.should.equal(3)
        }),
        it("parses the link correctly", () => {
            const link = service.links[2]
            link.uri.should.equal("http://example.net/schedule")
            link.mimeValue.should.equal("text/html")
            link.lang.should.equal("en")
            link.description.should.equal("Permanent Schedule")
            const expiry = link.expiryTime.unix()
            expiry.should.equal(4100781600)
            link.expired.should.be.false
        }),
        it("does not include expired links", () => {
            const link = service.links[1]
            link.uri.should.not.equal("http://example.net/promotion")
        })
    }),
    describe("long name", () => {
        it("parses the long name correctly", () => {
            service.longName.should.equal("Test Service Long Name")
        })
    }),
    describe("multimedia", () => {
        it('has the correct number of items', () => {
            service.multimedia.length.should.equal(6)
        }),
        it('passes each multimedia element correctly', () => {
            const multimedia = service.multimedia[2]
            multimedia.mimeValue.should.equal("image/png")
            multimedia.url.should.equal("http://via.placeholder.com/128x128.png")
            multimedia.width.should.equal(128)
            multimedia.height.should.equal(128)
        })
    }),
    describe("long description", () => {
        it("parses the long description correctly", () => {
            service.longDescription.should.equal("Test Long Description")
        })
    }),
    describe("RadioDNS", () => {
        it("has the correct fqdn", () => {
            service.radioDNS.fqdn.should.equal("www.example.net")
        }),
        it("has the correct service identifier", () => {
            service.radioDNS.serviceIdentifier.should.equal("service1")
        })
    }),
    describe("service group member", () => {
        it("parses the service group member correctly", () => {
            service.serviceGroupMember.should.equal("test")
        })
    }),
    describe("short name", () => {
        it("parses the short name correctly", () => {
            service.shortName.should.equal("TestName")
        })
    }),
    describe("medium name", () => {
        it("parses the medium name correctly", () => {
            service.mediumName.should.equal("Test Medium Name")
        })

    }),
    describe("short description", () => {
        it("parses the short description correctly", () => {
            service.shortDescription.should.equal("Test Short Description")
        })

    })
})
