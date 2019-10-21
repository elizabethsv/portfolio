import React from 'react'

const BrokenApp = () =>{
    return(
        <div className='project-details-container'>
            <div className="project-title">Broken Street Fighter</div>
           <iframe src="https://player.vimeo.com/video/367660075" title="Broken Street Fighter" width="640" height="324" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <div id="project-links">
                <div><a href="https://github.com/elizabethsv/broken-street-fighter">GitHub</a></div> <div><a href="https://broken-street-fighter-2.herokuapp.com">Live</a></div>
            </div>
            <div id="project-details">
                <p>As part of the bootcamp I attended, we were required to build a "useless app"
                in two days. Using Neo4j and Cypher querying language, my partner and I built an app that
                tells user's which moves would not be available if the chosen button is broken. 
                </p>
                <br/>
                <br/>
                <p><strong>Built with:</strong> HTML, CSS, Mustache, Node.js, Express.js, Neo4j, JavaScript</p>
            </div>
        </div>
    )
}
export default BrokenApp