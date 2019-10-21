import React from 'react'
import photo from '../images/temp.png'
import express from '../images/expressjs.svg'
import mongo from '../images/mongo.svg'
import nodejs from '../images/nodejs.svg'
import postgres from '../images/postgresql.svg'
import sass from '../images/sass.svg'
import react from '../images/reactjs-icon.svg'
import JS from '../images/javascript.svg'
import PS from '../images/photoshop.svg'
const About = () =>{
    return(
        <div className='about-container'>
           
           <div id ='about-me-info'>
           <div id="title">About Me</div>
           <img src={photo} alt="headshot"/>
               <p>
                   I am a software developer based in Houston, TX.  
                   I have a passion for design and challenging
                   myself with solving new problems and learning new things.  
               </p>
               <div id="contact-div">
                <div id="email"><a href = "mailto: vasquezelizabeth03@gmail.com">Get in touch</a></div>
                <div id="social"><a href="https://www.linkedin.com/in/elizabethsvasquez/">LinkedIn</a></div>
                <div id="social"><a href="https://github.com/elizabethsv">GitHub</a></div>
               </div>
           </div>
           
            <div id="skills-section">
            <h3>Skills:</h3><br/>
            <div>
            <img src={express} alt="express logo"/>
            <img src={mongo} alt="MongoDB logo"/>
            <img src={nodejs} alt="Node.js logo"/>
            <img src={postgres} alt="PostgreSQL logo"/>
            <img src={sass} alt="Sass logo"/>
            <img src={react} alt="React logo"/>
            <img src={JS} alt="javascript logo"/>
            <img src={PS} alt="photoshop logo"/>
            </div>
              
            
            </div>
           

        </div>
    )
}
export default About