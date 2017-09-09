function serviceXml() {
    return  `<service>
        <shortName>TestName</shortName>
        <mediumName>Test Medium Name</mediumName>
        <longName>Test Service Long Name</longName>
        <mediaDescription>
            <shortDescription>Test Short Description</shortDescription>
            <longDescription>Test Long Description</longDescription>
        </mediaDescription>
        <mediaDescription>
            <multimedia mimeValue="image/png" url="http://via.placeholder.com/32x32" width="32" height="32"/>
        </mediaDescription>
        <mediaDescription>
            <multimedia mimeValue="image/png" url="http://via.placeholder.com/112x32" width="112" height="32"/>
        </mediaDescription>
        <mediaDescription>
            <multimedia mimeValue="image/png" url="http://via.placeholder.com/128x128.png" width="128" height="128"/>
        </mediaDescription>
        <mediaDescription>
            <multimedia mimeValue="image/png" url="http://via.placeholder.com/320x240" width="320" height="240"/>
        </mediaDescription>
        <mediaDescription>
            <multimedia mimeValue="image/png" url="http://via.placeholder.com/600x600" width="600" height="600"/>
        </mediaDescription>
        <mediaDescription>
            <multimedia mimeValue="image/png" url="http://via.placeholder.com/800x800" width="800" height="800"/>
        </mediaDescription>
        <keywords>test, service, radio, spi</keywords>
        <genre href="urn:tva:metadata:cs:ContentCS:2004:3.6.8">Electronic/Club/Urban/Dance</genre>
        <genre href="urn:tva:metadata:cs:ContentCS:2004:3.6.10" type="secondary">Hit-Chart/Song Requests</genre>
        <genre href="urn:tva:metadata:cs:ContentCS:2004:3.6.8.14" type="other">Dance/Dance-pop</genre>
        <link mimeValue="text/html" uri="http://example.net" />
        <link mimeValue="text/html" uri="http://example.net/promotion" description="An expired promotion" expiryTime="2010-01-01T12:00:00Z" />
        <link mimeValue="text/html" uri="http://example.net/website" description="Station website" />
        <link mimeValue="text/html" uri="http://example.net/schedule" lang="en" description="Permanent Schedule" expiryTime="2099-12-12T18:00:00Z" />
        <bearer cost="20" id="dab:ce1.c123.c456.0" mimeValue="audio/mpeg" offset="2500"/>
        <bearer cost="30" id="fm:ce1.c123.10000"/>
        <bearer bitrate="48" cost="41" id="http://example.net/service1AAC" mimeValue="audio/aacp" offset="16000"/>
        <bearer bitrate="128" cost="42" id="http://example.net/service1MP3" mimeValue="audio/mpeg" offset="10000"/>
        <radiodns fqdn="www.example.net" serviceIdentifier="service1"/>
        <serviceGroupMember id="test"/>
    </service>`
}

export default serviceXml
