import chai from 'chai'
import path from 'path'
import {DOMParser} from 'xmldom'


var expect = chai.expect
chai.should()

import ServiceProvider from "../lib/ServiceProvider"
import serviceProviderXml from "./assets/serviceProviderXml"

describe("ServiceProvider class", () => {

    it("exists", () => {
        ServiceProvider.should.exist
    })
}),
describe("Parser", () => {
  var parser = new DOMParser()
  const data = parser.parseFromString(serviceProviderXml(), "text/xml");

  var serviceProvider = new ServiceProvider()
  serviceProvider.parse(data.childNodes[0])


})
