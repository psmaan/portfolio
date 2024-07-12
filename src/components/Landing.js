import React, { useRef, useEffect, useState } from 'react';

import pfp from './instadp.jpeg';
import instagram from './logoinstagram.png';
import linkedin from './logolinkedin.png';
import twitter from './logotwitter.png';
import github from './logogithub.png';
import mainImage from './pfpnew.jpeg';
import menuCross from './cross.png'
import menuImg from './menuimg.png'

export default function Landing(props) {

    const [menuStyle, setMenuStyle] = useState({
        backgroundColor: "gray",
        height: "100vh",
        width: "100%",
        display: "none",
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: "20px",
        position: "fixed",
        zIndex: "2",
        background: "rgb(120,120,120)",
        background: "radial-gradient(circle, rgba(120,120,120,1) 44%, rgba(64,64,64,1) 100%)"
    });

    var menuVisible = 0;

    const showMenu = () => {
        if (menuVisible === 0) {
            setMenuStyle(prevStyle => ({
                ...prevStyle,
                display: "flex"
            }));
            menuVisible = 1;
        } else if (menuVisible === 1) {

            setMenuStyle(prevStyle => ({
                ...prevStyle,
                display: "none"
            }));
            menuVisible = 0;
        } else {
            console.log(`fuck you`);
        }

    }

    const hideMenu = () => {
        setMenuStyle(prevStyle => ({
            ...prevStyle,
            display: "none"
        }));
        menuVisible = 0;
    }

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
        <>
            <div className="menu-container" style={menuStyle}>
                <h1 onClick={hideMenu}><a href='#landinglinker'>Home</a></h1>
                <h1 onClick={hideMenu}><a href='#workslinker'>Works</a></h1>
                <h1 onClick={hideMenu}><a href='#aboutlinker'>About Me</a></h1>
                <h1 onClick={hideMenu}><a href='#contactlinker'>Contact</a></h1>
                <div className="menu socials-sidebar">
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
            </div>
            <div className='landing-container' id='landinglinker' ref={landingRef}>

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
                    <div className="menu-button">
                        <label class="hamburgers" onClick={showMenu}>
                            <img src={menuImg}></img>
                        </label>
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
        </>

    );
}
