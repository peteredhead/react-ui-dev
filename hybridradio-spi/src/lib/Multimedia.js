export const LOGO = {
    UNRESTRICTED: 0,
    COLOUR_SQUARE: 1,
    COLOUR_RECTANGLE: 2
}

export default class Multimedia {
    constructor(url, lang = undefined, mimeValue = undefined, typeString = undefined, width = undefined, height = undefined) {
        this.lang =lang
        this.url = url
        switch(typeString) {
            case "logo_unrestricted":
                this.type_ = LOGO.UNRESTRICTED
                if (mimeValue === undefined) {
                    throw new Error(`Multimedia element (${url}) requires mimeValue to be set when type is logo_unrestricted`)
                } else {
                    this.mimeValue = mimeValue
                }
                if (width === undefined) {
                    throw new Error(`Multimedia element (${url}) requires width to be set when type is logo_unrestricted`)
                } else {
                    this.width = width
                }
                if (height === undefined) {
                    throw new Error(`Multimedia element (${url}) requires height to be set when type is logo_unrestricted`)
                } else {
                    this.height = height
                }
                break
            case "logo_colour_square":
                this.type_ = LOGO.COLOUR_SQUARE
                this.mimeValue = "image/png"
                this.width = 32
                this.height = 32
                break
            case "logo_colour_rectangle":
                this.type_ = LOGO.COLOUR_RECTANGLE
                this.mimeValue = "image/png"
                this.width = 112
                this.height = 32
                break
            default:
                this.type_ = undefined
                if (mimeValue === undefined) {
                    throw new Error(`Multimedia element (${url}) requires mimeValue to be set when type is type is not specified`)
                } else {
                    this.mimeValue = mimeValue
                }
                if (Number.isInteger(width) && width >= 0) {
                    this.width = width
                } else {
                    throw new Error(`Multimedia element (${url}) requires width to be an integer greater than 0 (${width} specified)`)
                }
                if (Number.isInteger(height) && height >= 0) {
                    this.height = height
                } else {
                    throw new Error(`Multimedia element (${url}) requires height to be an integer greater than 0 (${height} specified)`)
                }
        }       
    }
    
    // Additional function for key? w_h ?
}