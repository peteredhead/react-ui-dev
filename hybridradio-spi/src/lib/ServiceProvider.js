import Link from "./Link"
import Multimedia from "./Multimedia"
export default class ServiceProvider {
    constructor() {
        this.keywords = []
        this.links = []
        // media description
        this.shortName, this.mediumName, this.longName = undefined
    }

    parse(element) {
        var childNodes = element.childNodes
        for (var i=0; i < childNodes.length; i++) {
            const child = childNodes[i]
            var nodeName = child.nodeName
            switch (nodeName) {
                case "shortName":
                    this.shortName = this.parseText(child, 8)
                    console.log(`** shortName is ${this.shortName}`)
                    break
                case "mediumName":
                    this.mediumName = this.parseText(child, 16)
                    console.log(`** mediumName is ${this.mediumName}`)
                    break
                case "longName":
                    this.longName = this.parseText(child, 128)
                    console.log(`** longName is ${this.longName}`)
                case "mediaDescription":
                    this.parseMediaDescription(child)
                    break
                case "link":
                    const link = this.parseLink(child)
                    // Could set this in the function itself
                    this.links.push(link)
                    break
            }
        }
        console.log("%o", this.links)
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
        return link
    }

    parseMediaDescription(element) {
        var childNodes = element.childNodes
        for (var i=0; i < childNodes.length; i++) {
            const child = childNodes[i]
            var nodeName = child.nodeName
            switch (nodeName) {
                case "shortDescription":
                    console.log("shortDescription")
                    break
                case "longDescription":
                    console.log("longDescription")
                    break
                case "multimedia":
                    console.log("multimedia")
                    break
            }
            console.log(`>>> ${nodeName}`)
        }
    }
}
