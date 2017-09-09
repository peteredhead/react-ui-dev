import moment from 'moment'

export default class Link {
    constructor(uri, mimeValue = null, lang = null, description = null, expiryTime = null) {
        this.uri = uri
        this.mimeValue = mimeValue
        this.lang = lang
        this.description = description
        this.expiryTime = expiryTime === null ? null : moment(expiryTime)
        if (this.expiryTime === null) {
            this.expired = false
        } else {
            const now = moment()
            this.expired = now > this.expiryTime
        }
    }
    
}