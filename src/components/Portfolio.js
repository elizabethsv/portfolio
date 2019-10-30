import React from 'react'
import purple_thumb from '../images/purple_thumb.png'
import streetfighter from '../images/thumbnail.jpg'
import ticketthumb from '../images/ticket_thumb.png'
import PT_thumb from '../images/PT_thumb.png'
import keto from '../images/keto-ai.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Portfolio = () =>{
    return(
        <Wrapper>
            <div id='title'>Portfolio</div>
            
            <div id="featured">
                
                <img src={keto} style={{width:'50%', boxShadow:'0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'}} alt='ketoai screenshot'/>
                <div id="featured-desc">
                    <h4>Keto-AI Web App</h4>
                    <p>As part of the <a href="http://keto-ai.com">Keto-AI</a>'s team, I was responsible for contributing to adding features to their web application.</p>
                    
                </div>
                
            </div>
            
        <div className="portfolio" id="portfolio">
            
                <div className='thumbnail'>
                    <Link to="/purplemap">
                        <img src={purple_thumb} alt="Purple Map App Thumbnail"/>
                    
                    <div className='overlay'>
                        <div className='text'>Purple Map App</div>
                    </div>
                    </Link>
                </div>

                <div className='thumbnail'>
                    <Link to="/brokenstreetfighter">
                        <img src={streetfighter} alt="Broken Street Fighter Thumbnail"/>
                    
                    <div className='overlay'>
                        <div className='text'>Broken Street Fighter</div>
                    </div>
                    </Link>
                </div>

                <div className='thumbnail'>
                    <Link to="/ticketpug">
                    <img src={ticketthumb} alt="Ticket Pug Thumbnail"/>
                    <div className='overlay'>
                        <div className='text'>Ticket Pug</div>
                    </div>
                    </Link>
                </div>
                    
                <div className='thumbnail'>
                    <a href="https://github.com/elizabethsv/clientmanagement">
                    <img src={PT_thumb} alt="Client Management Thumbnail"/>
                    <div className='overlay'>
                        <div className='text'>Client Management</div>
                    </div>
                    </a>
                </div>

        </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    margin: 20px 10px 10px 10px;
    background-color:white;
    height: 100vh;
`