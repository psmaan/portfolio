import React, { useRef } from 'react'

import grammie from './grammiefinal.png'
import siteArrow from './site-arrow.png'

const Works = React.forwardRef((props, ref) => {

    const worksRef = useRef(null);

    return (
        <div id='workslinker' ref={worksRef} className='works-container two'>
            <div className="project-content-container">
                <div className="works-header two">
                    <h1>02 / 05</h1>
                </div>
                <div className="project-container two">
                    <h1>Grammie - Healthcare App for Elderly and Caretakers</h1>
                    <div className="skills-section two">

                        <button>TAILWIND CSS</button>
                        <button>HTML</button>
                        <button>REACT</button>
                        <button>NODE</button>
                        <button>RESPONSIVE DESIGN</button>
                        <button>FIGMA</button>
                    </div>
                    <div className="project-info two">
                        <div className="project-title">
                            <h3>Project</h3>
                            <h2>Grammie</h2>
                        </div>
                        <div className="project-role">
                            <h3>Role</h3>
                            <h2>React Lead</h2>
                        </div>
                        <div className="project-date">
                            <h3>Date</h3>
                            <h2>June 2024</h2>
                        </div>
                    </div>
                    <div className="project-link two">
                        <button><a target='blank' href='https://medical-website-nu.vercel.app/userdashboard'>Go to Site</a></button>
                    </div>
                </div>
            </div>
            <div className="project-image-container">
                <div className="project-image">
                    <img src={grammie}></img>
                </div>
            </div>
        </div>
    )
});

export default Works;
