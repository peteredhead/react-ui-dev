import moment from 'moment'

export default class Link {
    constructor(uri, mimeValue = null, lang = null, description = null, expiryTime = null) {
        this.uri = uri
        this.mimeValue = mimeValue
        this.lang = lang
        this.description = description
        if (expiryTime === null) {
            this.expiryTime = null
        } else {
            this.expiryTime = moment(expiryTime)
        }
    }
    
    get() {
        // Check if link expired. If so, return null
        // else return achor tag with description
    }
}