import React from 'react'
import styled from 'styled-components'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Header } from './BaseLayout'
import { Portfolio } from './Portfolio'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PurpleMap from './PurpleMap'
import BrokenApp from './BrokenApp'
import TicketPug from './TicketPug'
import About from './About'
function Container({location}) {
    return(
        <Wrapper>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{enter: 600, exit: 400}}
                    classNames={'fade'}
                >       
                <section className='route-section'>
                    <Switch location={location}>
                        <Route exact path='/' component={Header}/>
                        <Route path='/portfolio' component={Portfolio}/>
                        <Route path='/purplemap' component={PurpleMap}/>
                        <Route path='/brokenstreetfighter' component={BrokenApp}/>
                        <Route path='/ticketpug' component={TicketPug}/>
                        <Route path='/about' component={About}/>
                    </Switch>
                </section>

            </CSSTransition>
            </TransitionGroup>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.fade-enter{
    opacity: 0.01
}
.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
}

.fade-exit {
    opacity: 1;
}

.fade-exit.fade-exit-active{
    opacity: 0.01;
    transition: opacity 300ms ease-in
}
div.transition-group{
    position: relative;
}

section.route-section{
    position:absolute;
    width:100%;
    top: 0;
    left: 0;
    z-index:1;
}
`;

export default withRouter(Container)