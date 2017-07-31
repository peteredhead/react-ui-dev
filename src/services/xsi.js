// http://epg.musicradio.com/radiodns/epg/XSI.xml

// check if still XSI in new spec

import Service from "../data/service.js"

export default class XSILoader {
    static loadXSI(url) {
        return new Promise((resolve, reject) =>{
            var req = new XMLHttpRequest()
            url = url.replace('http://epg.musicradio.com','/musicradio.php?p=')
            req.open('GET', url)
            
            req.onload = function() {
                if (req.status == 200) {
                    const services = req.responseXML.getElementsByTagName('service')
                    for (var i = 0; i < services.length; i++) { 
                        let service = new Service()
                        try {
                            service.fromXml(services[i])
                            console.log("%o", service)
                        } catch(err) {
                            console.log("Things went bad whilst parsing service from XSI")
                            console.error(err.message)
                            console.log(err.stack)
                        }
                    }
                    const groups = req.responseXML.groups
                    resolve(services, groups)
                } else {
                    reject(Error(req.statusText))
                }
            }
            
            req.onerror = function() {
                reject(Error("Network Error"))
            }
            
            req.send()
        })
    }
}