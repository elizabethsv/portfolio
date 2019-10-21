import React from 'react'
import purple_thumb from '../images/purple_thumb.png'
import streetfighter from '../images/thumbnail.jpg'
import ticketthumb from '../images/ticket_thumb.png'
import PT_thumb from '../images/PT_thumb.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Portfolio = () =>{
    return(
        <Wrapper>
            <div id='title'>Portfolio</div>
        <div className="portfolio">
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
                    <img src={PT_thumb} alt="PT Client Management Thumbnail"/>
                    <div className='overlay'>
                        <div className='text'>PT Client Management</div>
                    </div>
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