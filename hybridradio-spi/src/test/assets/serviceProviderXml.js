function serviceXml() {
    return  `<serviceProvider>
     <shortName>Global</shortName>
     <mediumName>Global Radio</mediumName>
     <mediaDescription>
        <shortDescription>I am a service provider.</shortDescription>
     </mediaDescription>
     <mediaDescription>
         <multimedia url="http://epg.musicradio.com/logos/global/320x240.png"
         type="logo_unrestricted" mimeValue="image/png" height="240" width="320" />
     </mediaDescription>
     <mediaDescription>
         <multimedia url="http://epg.musicradio.com/logos/global/32x32.png"
     type="logo_colour_square" />
     </mediaDescription>
     <keywords>radio, television, publishing, talent, charities &amp; communities
     </keywords>
     <link uri="http://www.thisisglobal.com" mimeValue="text/html" description="Homepage" />
     <link uri="postal:Global%20Radio/30%20Leicester%20Square/London/WC2H%207LA" />
     <link uri="tel:+44-020-77666000" />
     <geolocation>
     <country>GB</country>
     <point>51.473939 -2.508112</point>
     </geolocation>
 </serviceProvider>`
}

export default serviceXml
