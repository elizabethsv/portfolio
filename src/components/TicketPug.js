import React from 'react'

const TicketPug = () =>{
    return(
        <div className='project-details-container'>
            <div className="project-title">TicketPug</div>
            <iframe src="https://player.vimeo.com/video/367661509" title="TicketPug" width="640" height="327" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <div id="project-links">
                <div><a href="https://github.com/elizabethsv/ticketpug">GitHub</a></div> 
            </div>
            <div id="project-details">
                <p>
                TicketPug is a proof-of-concept e-commerce site that allows users to purchase concert tickets directly from the venue hosting the event.
                </p>
                <br/>
                <br/>
                <p><strong>Built with:</strong> HTML, CSS, Pug, TicketmaterAPI, Node.js, Express.js, PostgreSQL, Sequelize, bcrypt, Stripe</p>
            
            </div>
        </div>
    )
}
export default TicketPug