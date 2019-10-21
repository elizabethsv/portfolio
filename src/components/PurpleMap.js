import React from 'react'

const PurpleMap = () =>{
    return(
        <div className='project-details-container'>
            <div className="project-title">Purple Map App</div>
            <iframe src="https://player.vimeo.com/video/367602775" title="Purple Map App" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <div id="project-links">
                <div><a href="https://github.com/ersnover/purple-map-app">GitHub</a></div> <div><a href="http://purplemapapp.surge.sh">Live</a></div>
            </div>
            <div id="project-details">
                <p>
                Purple is an app that combines location scouting and walkability
                scores with a personalized criteria to deliver a location rating specific to the user.
                </p>
                <br/>
                <br/>
                <p><strong>Built with:</strong> Adobe Photoshop(for the mockup), Firebase, Sass, JavaScript.</p>
            
            </div>
        </div>
    )
}
export default PurpleMap