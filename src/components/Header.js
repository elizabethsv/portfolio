import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function HeadNav() {
    let [nav, setNav]=useState(null)


    const menuClick = () =>{
        if(!nav){
            setNav(true)
        }else{
            setNav(false)
        }
        
    }
    const handleClose = () =>{
        setNav(false)
    }

    return (
        <Wrapper >
            <div className={!nav ? 'menu-btn': 'hide-menu'}  onClick={menuClick}>&#9776;</div>
            <div className={!nav ? 'overlay-display-none': 'overlay-menu'}>
                
                <Link to='/' onClick={handleClose}>Home</Link><br/>
                {/* <Link to='#title' onClick={handleClose}>Portfolio</Link> */}
                {/* <a href="#portfolio">Portfolio</a> */}
                <Link to='/about' onClick={handleClose}>About</Link>
            </div>
            
            {/* <Link to='/'>Home </Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/about'>About</Link> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 20px;
    display: flex;
    align-items: flex-start;
    justify-content:flex-end;
    position:fixed;
    padding-bottom:10px;

    // overflow-x: hidden;
    transition: 0.5s;
    z-index: 2;
    width=0;


    a{
        text-decoration: none;
        color: black;
        margin-right:15px;
        font-size: 1em;
        margin-top:10px;
        

    }
    a:hover{
        color:teal;
    }
    `;
    ;

export default HeadNav