import Genre from "./Genre"
import Link from "./Link"
import Bearer from "./Bearer"
import Multimedia from "./Multimedia"
import RadioDNS from "./RadioDNS"

export default class Service {
    constructor() {
        this.bearers = []
        this.genres = []
        this.keywords = []
        this.links = []
        this.shortName, this.mediumName, this.longName = undefined
        this.multimedia = [] // may want to key this
        this.shortDescription, this.longDescription = undefined
        this.radioDNS = undefined
        this.serviceGroupMember = undefined
    }

    fromXml(xml) {

        // Change this approach
        // Rather than searching for elements matching tag names
        // iterate over the elements and switch/ case based on
        // the tag name of the child element
        // SEE ServiceProvider for details
        // Bearers
        let bearers = xml.getElementsByTagName("bearer")
        for (var i = 0; i < bearers.length; i++) {
            const b = bearers[i]
            let cost = parseInt(b.getAttribute("cost"), 10)
            if (isNaN(cost)) { cost = undefined }
            let bitrate = parseInt(b.getAttribute("bitrate"), 10)
            if (isNaN(bitrate)) { bitrate = undefined }
            let offset = parseInt(b.getAttribute("offset"), 10)
            if (isNaN(offset)) { offset = undefined }
            let bearer = new Bearer(
                b.hasAttribute("id") ? b.getAttribute("id") : undefined,
                cost,
                b.hasAttribute("mimeValue") ? b.getAttribute("mimeValue") : undefined,
                bitrate,
                offset
            )
            this.bearers.push(bearer)
        }

        // Genres
        let genres = xml.getElementsByTagName("genre")
        for (var i = 0; i < genres.length; i++) {
            const g = genres[i]
            let genre = new Genre(
                g.hasAttribute("href") ? g.getAttribute("href") : undefined,
                g.hasAttribute("href") ? g.getAttribute("type") : undefined,
                g.textContent
            )
            this.genres.push(genre)
        }

        // Keywords
        let keywords = xml.getElementsByTagName("keywords")
        if (keywords.length > 0) {
            keywords = keywords[0].childNodes[0].textContent.split(",")
            // Remove spaces from keywords
            this.keywords = keywords.map((keyword) => { return keyword.trim()})
        }

        // Links
        let links = xml.getElementsByTagName("link")
        for (var i = 0; i < links.length; i++) {
            const l = links[i]
            let link = new Link(
                l.hasAttribute("uri") ? l.getAttribute("uri") : undefined,
                l.hasAttribute("mimeValue") ? l.getAttribute("mimeValue") : undefined,
                l.hasAttribute("lang") ? l.getAttribute("lang") : undefined,
                l.hasAttribute("description") ? l.getAttribute("description") : undefined,
                l.hasAttribute("expiryTime") ? l.getAttribute("expiryTime") : undefined
            )
            if (!link.expired) this.links.push(link)
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
        let multimediaz = xml.getElementsByTagName("multimedia")
        for (var i = 0; i < multimediaz.length; i++) {
            const m = multimediaz[i]
            let width = parseInt(m.getAttribute("width"), 10)
            if (isNaN(width)) { width = undefined }
            let height = parseInt(m.getAttribute("height"), 10)
            if (isNaN(height)) { height = undefined }
            let multimedia = new Multimedia(
                m.hasAttribute("url") ? m.getAttribute("url") : undefined,
                m.hasAttribute("lang") ? m.getAttribute("lang") : undefined,
                m.hasAttribute("mimeValue") ? m.getAttribute("mimeValue") : undefined,
                m.hasAttribute("type") ? m.getAttribute("type") : undefined,
                width,
                height
            )
            this.multimedia.push(multimedia)
        }


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

        // RadioDNS
        let radioDNS = xml.getElementsByTagName("radiodns")
        if (radioDNS.length > 0) {
            let r = radioDNS[0]
            this.radioDNS = new RadioDNS(
                r.hasAttribute("fqdn") ? r.getAttribute("fqdn") : undefined,
                r.hasAttribute("serviceIdentifier") ? r.getAttribute("serviceIdentifier") : undefined
            )
        }

        // Service Group Member
        let serviceGroupMember = xml.getElementsByTagName("serviceGroupMember")
        if (serviceGroupMember.length > 0) {
            this.serviceGroupMember = serviceGroupMember[0].hasAttribute("id") ? serviceGroupMember[0].getAttribute("id") : null
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
• serviceGroupMember

• geolocation

At least one of each of the following descriptive elements shall be specified for each service, in the default document
language:
• shortName
• mediumName
At least one genre element shall be
*/
