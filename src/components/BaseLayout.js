import React from 'react'
import '../App.css';
// import watercolour from './watercolour.jpg'
import {Portfolio} from './Portfolio'

export const Header = () =>{
    return(
        <React.Fragment>
        <div className="header">
            <h1>Elizabeth Vasquez</h1>
            <h3>Software Developer</h3>
        </div>
        <Portfolio/>
        </React.Fragment>

    )
}
