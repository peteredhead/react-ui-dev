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
        this.serviceProvider = undefined
    }

    parse(element) {
        var childNodes = element.childNodes
        for (var i=0; i < childNodes.length; i++) {
            const child = childNodes[i]
            var nodeName = child.nodeName
            switch (nodeName) {
                case "shortName":
                    this.shortName = this.parseText(child, 8)
                    break
                case "mediumName":
                    this.mediumName = this.parseText(child, 16)
                    break
                case "longName":
                    this.longName = this.parseText(child, 128)
                case "mediaDescription":
                    this.parseMediaDescription(child)
                    break
                case "link":
                    this.parseLink(child)
                    break
                case "bearer":
                    this.parseBearer(child)
                    break
                case "genre":
                    this.parseGenre(child)
                    break
                case "keywords":
                    this.parseKeywords(child)
                    break
                case "radiodns":
                    this.parseRadioDNS(child)
                    break
                case "serviceGroupMember":
                    this.parseServiceGroupMember(child)
                    break
                case "serviceProvider":
                    this.serviceProvider = new ServiceProvider()
                    serviceProvider.parse(child)
                    break
            }
        }
    }

    parseText(element, maxLength) {
      if (element.childNodes !== undefined && element.childNodes.length > 0) {
          let text = element.childNodes[0].textContent
          // Check length
          if (text.length > maxLength) {
              console.warn(`${element.nodeName} exceeds the maximum length of ${maxLength} characters`)
              return undefined
          } else {
              return text
          }
      }
      return undefined
    }

    parseLink(element) {
        let link = new Link(
            element.hasAttribute("uri") ? element.getAttribute("uri") : undefined,
            element.hasAttribute("mimeValue") ? element.getAttribute("mimeValue") : undefined,
            element.hasAttribute("lang") ? element.getAttribute("lang") : undefined,
            element.hasAttribute("description") ? element.getAttribute("description") : undefined,
            element.hasAttribute("expiryTime") ? element.getAttribute("expiryTime") : undefined
        )
        if (!link.expired) this.links.push(link)
    }

    parseMediaDescription(element) {
        var childNodes = element.childNodes
        for (var i=0; i < childNodes.length; i++) {
            const child = childNodes[i]
            var nodeName = child.nodeName
            switch (nodeName) {
                case "shortDescription":
                    this.shortDescription = this.parseText(child, 180)
                    break
                case "longDescription":
                    this.longDescription = this.parseText(child, 1200)
                    break
                case "multimedia":
                    this.parseMultimedia(child)
                    break
            }
        }
    }

    parseMultimedia(element) {
        let width = parseInt(element.getAttribute("width"), 10)
        if (isNaN(width)) { width = undefined }
        let height = parseInt(element.getAttribute("height"), 10)
        if (isNaN(height)) { height = undefined }
        let multimedia = new Multimedia(
            element.hasAttribute("url") ? element.getAttribute("url") : undefined,
            element.hasAttribute("lang") ? element.getAttribute("lang") : undefined,
            element.hasAttribute("mimeValue") ? element.getAttribute("mimeValue") : undefined,
            element.hasAttribute("type") ? element.getAttribute("type") : undefined,
            width,
            height
        )
        this.multimedia.push(multimedia)
    }

    parseBearer(element) {
        let cost = parseInt(element.getAttribute("cost"), 10)
        if (isNaN(cost)) { cost = undefined }
        let bitrate = parseInt(element.getAttribute("bitrate"), 10)
        if (isNaN(bitrate)) { bitrate = undefined }
        let offset = parseInt(element.getAttribute("offset"), 10)
        if (isNaN(offset)) { offset = undefined }
        let bearer = new Bearer(
            element.hasAttribute("id") ? element.getAttribute("id") : undefined,
            cost,
            element.hasAttribute("mimeValue") ? element.getAttribute("mimeValue") : undefined,
            bitrate,
            offset
        )
        this.bearers.push(bearer)
    }

    parseGenre(element) {
        let genre = new Genre(
            element.hasAttribute("href") ? element.getAttribute("href") : undefined,
            element.hasAttribute("href") ? element.getAttribute("type") : undefined,
            element.textContent
        )
        this.genres.push(genre)
    }
    parseKeywords(element) {
        let keywords = element.childNodes[0].textContent.split(",")
        // Remove spaces from keywords
        this.keywords = keywords.map((keyword) => { return keyword.trim()})
    }

    parseRadioDNS(element) {
        this.radioDNS = new RadioDNS(
            element.hasAttribute("fqdn") ? element.getAttribute("fqdn") : undefined,
            element.hasAttribute("serviceIdentifier") ? element.getAttribute("serviceIdentifier") : undefined
        )
    }

    parseServiceGroupMember(element) {
        this.serviceGroupMember = element.hasAttribute("id") ? element.getAttribute("id") : null
    }

    getName() {
        // Return whichever of shortName, mediumName, longName
        if (this.longName !== undefined) {
            return this.longName
        } else if (this.mediumName !== undefined) {
            return this.mediumName
        } else {
            return this.shortName
        }
    }

    getDescription() {
        if (this.longDescription !== undefined) {
            return this.longDescription
        } else {
            return this.shortDescription
        }
    }
}
