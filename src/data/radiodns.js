export default class RadioDNS {
    constructor(fqdn, serviceIdentifier) {
        if (fqdn !== undefined) {
            this.fqdn = fqdn
        } else {
            console.warn("RadioDNS FQDN is not defined for given service")
            this.fqdn = undefined
        }
        if (serviceIdentifier !== undefined) {
            this.serviceIdentifier = serviceIdentifier
        } else {
            console.warn("RadioDNS Service Identifer is not defined for given service")
            this.serviceIdentifier = undefined
        }
    }
}