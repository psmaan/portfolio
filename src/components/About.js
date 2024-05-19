import React from 'react';

import aboutme from './aboutmeimage.jpeg'

import skillhtml from './html5.png'
import skillcss from './css3.png'
import skilljs from './javascript.png'
import skillreact from './React.webp'
import skilltailwind from './tailwind.png'
import resume from './resume.pdf'
import skillnode from './nodejs.png'

function About() {
    return (
        <div id='aboutlinker' className="about-container">
            <div className="about-main">
                <div className="about-left">
                    <div className="image-border">
                        <img src={aboutme}></img>
                    </div>
                    <h1>Piyush Maan</h1>
                    <h3>Let's build something great together</h3>
                    <a href={resume}>Download CV</a>
                </div>
                <div className="about-right">
                    <h1>Hey, nice to see you!</h1>
                    <h3>Hey, I am Piyush and am currently pursuing Bachelor’s in Computer Science.
                        It is my second year and I have developed skills in various programming
                        languages but mainly I am a frontend web developer and i create responsive frontend websites
                        using my expertise in HTML, CSS and JavaScript..</h3>
                    <h2>Relevant Skills</h2>
                    <div className="about-skills">
                        <div className="about-skill">
                            <img src={skillhtml}></img>
                            <h4>HTML</h4>
                        </div>
                        <div className="about-skill">
                            <img src={skillcss}></img>
                            <h4>CSS</h4>
                        </div>
                        <div className="about-skill">
                            <img src={skilljs}></img>
                            <h4>JavaScript</h4>
                        </div>
                        <div className="about-skill">
                            <img src={skillreact}></img>
                            <h4>React</h4>
                        </div>
                        <div className="about-skill">
                            <img className='tailwind' src={skilltailwind}></img>
                            <h4>Tailwind</h4>
                        </div>
                        <div className="about-skill">
                            <img className='node' src={skillnode}></img>
                            <h4>Node</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;