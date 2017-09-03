import chai from 'chai'
import path from 'path'
import {DOMParser} from 'xmldom'

var expect = chai.expect
chai.should()

import Service from "../lib/Service"
import serviceXml from "./assets/serviceXml"

var parser = new DOMParser()
const data = parser.parseFromString(serviceXml(), "text/xml");

var service = new Service()
service.fromXml(data)

console.log("%o", service)

describe("Service element parser", () => {
    
    it("exists", () => {
        Service.should.exist
    }),
    
    describe("bearers", () => {
        
    }),
    describe("genres", () => {
        
    }),
    describe("keywords", () => {
        
    }),
    describe("links", () => {
        
    }),
    describe("long name", () => {
        
    }),
    describe("multimedia", () => {
        
    }),
    describe("long description", () => {
        
    }),
    describe("RadioDNS", () => {
        
    }),
    describe("service group member", () => {
        
    }),
    describe("short name", () => {
        
    }),
    describe("medium name", () => {
        
    }),
    describe("short description", () => {
        
    })
})