export default class Bearer {
    constructor(id, cost = undefined, mimeValue = undefined, bitrate = undefined, offset = undefined) {
        this.id = id
        if (Number.isInteger(cost) && cost >= 0) {
            this.cost = cost
        } else {
            console.log(`isInt ${Number.isInteger(cost)}, >=0 ${cost >= 0}`)
            console.warn(`Invalid cost of ${cost} in service ${id}`)
            this.cost = undefined
        }
        this.mimeValue = mimeValue
        if (bitrate !== undefined) {
            if (Number.isInteger(bitrate) && bitrate >= 0) {
                this.bitrate = bitrate
            } else {
                console.warn(`Invalid bitrate of ${bitrate} in service ${id}`)
                this.bitrate = undefined
            }
        }
        if (offset !== undefined) {
            if (Number.isInteger(offset) && offset >= 0) {
                this.offset = offset
            } else {
                console.warn(`Invalid offset of ${offset} in service ${id}`)
                this.offset = 0
            }
        } else {
            this.offset = 0
        }
    }
}
