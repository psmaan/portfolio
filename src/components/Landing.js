import React, { useRef, useEffect } from 'react';

import pfp from './instadp.jpeg';
import instagram from './logoinstagram.png';
import linkedin from './logolinkedin.png';
import twitter from './logotwitter.png';
import github from './logogithub.png';
import mainImage from './portfolio-landing.jpeg';

export default function Landing(props) {
    const landingRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (landingRef.current) {
                landingRef.current.style.opacity = 1 - window.scrollY / 600;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='landing-container' ref={landingRef}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={pfp} alt="Profile"></img>
                    <h2>Piyush Maan</h2>
                </div>
                <div className="navbar-fixed">
                    <div className="navbar-main">
                        <h3><a href='#aboutlinker' className='about-link'>About</a></h3>
                        <h3><a href='#workslinker' className='works-link'>Works</a></h3>
                    </div>
                </div>
                <div className="navbar-buttons">
                    <button><a href='#contactlinker'>Contact</a></button>
                </div>
            </div>
            <div className="main-landing-container">
                <div className="socials-sidebar">
                    <div className="socials-button linkedin">
                        <a href='https://linkedin.com/in/piyushmaan'><img src={linkedin} alt="LinkedIn"></img></a>
                    </div>
                    <div className="socials-button github">
                        <a href='https://github.com/psmaan'><img src={github} alt="GitHub"></img></a>
                    </div>
                    <div className="socials-button instagram">
                        <a href='https://www.instagram.com/piyuxhmaan'><img src={instagram} alt="Instagram"></img></a>
                    </div>
                    <div className="socials-button twitter">
                        <a href='https://twitter.com/heyxpiyush'><img src={twitter} alt="Twitter"></img></a>
                    </div>
                </div>
                <div className="main-landing">
                    <div className="landing-headers">
                        <h2>Frontend React Developer</h2>
                        <h1>TURNING BRANDS INTO STUNNING WEBSITES</h1>
                        <button><a href="#contactlinker">Let's connect</a></button>
                    </div>
                    <div className="landing-image">
                        <img src={mainImage} alt="Main"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
