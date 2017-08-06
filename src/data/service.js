import {Genre, GENRE_TYPE} from "./genre.js"
import Link from "./link.js"
import Bearer from "./bearer.js"
import Multimedia from "./multimedia.js"

export default class Service {
    constructor() {
        this.bearers = []
        this.genres = []
        this.keywords = []
        this.links = []
        this.shortName, this.mediumName, this.longName = undefined
        this.multimedia = {}
        this.shortDescription, this.longDescription = undefined
    }
    
    fromXml(xml) {
        // Bearers
        let bearers = xml.getElementsByTagName("bearer")
        for (var i = 0; i < bearers.length; i++) { 
            const b = bearers[i]
            let bearer = new Bearer(b.id, b.cost, b.mimeValue, b.bitrate, b.offset)
            this.bearers.push(bearer)
        }
        
        // Genres
        let genres = xml.getElementsByTagName("genre")
        for (var i = 0; i < genres.length; i++) {
            const g = genres[i]
            let type_ = GENRE_TYPE.MAIN
            if (g.getAttribute("type") !== null) {
                if (g.getAttribute("type") == "secondary") {
                    type_ = GENRE_TYPE.SECONDARY
                } else if (g.getAttribute("type") == "other") {
                    type_ = GENRE_TYPE.OTHER
                }
            }
            let genre = new Genre(g.getAttribute("href"), type_, g.textContent)
            this.genres.push(genre)
        }
        
        // Keywords
        let keywords = xml.getElementsByTagName("keywords")
        if (keywords.length > 0) {
            this.keywords = keywords[0].childNodes[0].textContent.split(" ")
        }
        
        // Links
        let links = xml.getElementsByTagName("link")
        for (var i = 0; i < links.length; i++) {
            const l = links[i]
            let link = new Link(l.getAttribute("uri"), l.getAttribute("mimeValue"), l.getAttribute("lang"), l.getAttribute("description"), l.getAttribute("expiryTime"))
            this.links.push(link)
        }
        
        // Short Name
        let shortName = xml.getElementsByTagName("shortName")
        if (shortName.length > 0) {
            if (shortName[0].childNodes !== undefined && shortName[0].childNodes.length > 0) {
                this.shortName = shortName[0].childNodes[0].textContent
            }
        }
        // Medium Name
        let mediumName = xml.getElementsByTagName("mediumName")
        if (mediumName.length > 0) {
            if (mediumName[0].childNodes !== undefined && mediumName[0].childNodes.length > 0) {
                this.mediumName = mediumName[0].childNodes[0].textContent
            }
        }
        
        // Long Name
        let longName = xml.getElementsByTagName("longName")
        if (longName.length > 0) {
            if (longName[0].childNodes !== undefined && longName[0].childNodes.length > 0) {
                this.longName = longName[0].childNodes[0].textContent
            }
        }
        
        // Multimedia
        
        
        // Short Description
        let shortDescription = xml.getElementsByTagName("shortDescription")
        if (shortDescription.length > 0) {
            if (shortDescription[0].childNodes !== undefined && shortDescription[0].childNodes.length > 0) {
                let text = shortDescription[0].childNodes[0].textContent
                // Check length
                if (text.length > 180) {
                    console.warn("Short description exceeds the maximum length of 180 characters")
                } else {
                    this.shortDescription = text
                }
            }
        }
        
        // Long Description
        let longDescription = xml.getElementsByTagName("longDescription")
        if (longDescription.length > 0) {
            if (longDescription[0].childNodes !== undefined && longDescription[0].childNodes.length > 0) {
                let text = longDescription[0].childNodes[0].textContent
                // Check length
                if (text.length > 1200) {
                    console.warn("Long description exceeds the maximum length of 1200 characters")
                } else {
                    this.longDescription = text
                }
            }
        }
    }
    
    name() {
        // Return whichever of shortName, mediumName, longName
        if (this.longName !== undefined) {
            return this.longName
        } else if (this.mediumName !== undefined) {
            return this.mediumName
        } else {
            return this.shortName
        }
    }
    
    description() {
        if (this.longDescription !== undefined) {
            return this.longDescription
        } else {
            return this.shortDescription
        }
    }
}

/*
http://www.etsi.org/deliver/etsi_ts/102800_102899/102818/03.01.01_60/ts_102818v030101p.pdf

nameGroup (shortName, mediumName, longName) 
ETSI
25 ETSI TS 102 818 V3.1.1 (2015-01)
• mediaDescription
• genre
• keywords
• link
• bearer
• radiodns
• geolocation
• serviceGroupMember
At least one of each of the following descriptive elements shall be specified for each service, in the default document
language:
• shortName
• mediumName
At least one genre element shall be 
*/