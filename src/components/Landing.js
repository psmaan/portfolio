import React, { useRef } from 'react';

import pfp from './instadp.jpeg'
import instagram from './logoinstagram.png'
import linkedin from './logolinkedin.png'
import twitter from './logotwitter.png'
import github from './logogithub.png'
import mainImage from './portfolio-landing.jpeg'

export default function Landing(props) {
    const landingRef = useRef(null);

    return (
        <div className='landing-container'>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={pfp}></img>
                    <h2>Piyush Maan</h2>
                </div>
                <div className="navbar-fixed">
                    <div className="navbar-main">
                        <h3>About</h3>
                        <h3>Works</h3>
                    </div>
                </div>

                <div className="navbar-buttons">
                    <button>Contact</button>
                </div>
            </div>
            <div className="main-landing-container">
                <div className="socials-sidebar">
                    <div className="socials-button linkedin">
                        <img src={linkedin}></img>
                    </div>
                    <div className="socials-button github">
                        <img src={github}></img>
                    </div>
                    <div className="socials-button instagram">
                        <img src={instagram}></img>
                    </div>
                    <div className="socials-button twitter">
                        <img src={twitter}></img>
                    </div>
                </div>
                <div className="main-landing">
                    <div className="landing-headers">
                        <h2>Frontend React Developer</h2>
                        <h1>TURNING BRANDS INTO STUNNING WEBSITES</h1>
                        <button>Let's connect</button>
                    </div>
                    <div className="landing-image">
                        <img src={mainImage}></img>
                    </div>
                </div>
            </div>
            <div className="fotter-container">
                <h1>View Works</h1>
            </div>
        </div>
    );
}
