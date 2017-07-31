import React from 'react';
import ReactDOM from 'react-dom';

import XSILoader from './services/xsi.js';

class EPGUI extends React.Component {
    render() {
        XSILoader.loadXSI('http://epg.musicradio.com/radiodns/epg/XSI.xml').then((services, groups) =>
        {
           console.log("Resolved")  
        }, 
        (error) => {
            console.log("Error", error)
        })
        return (
            <h1>EPG UI</h1> 
        )
    }
}



ReactDOM.render(<EPGUI />, document.getElementById('epgui'))