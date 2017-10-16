import Link from "./Link"
import Multimedia from "./Multimedia"
export default class ServiceProvider {
    constructor() {
        this.keywords = []
        this.links = []
        this.multimedia = []
        this.shortName, this.mediumName, this.longName = undefined
        this.shortDescription, this.longDescription = undefined
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
}
