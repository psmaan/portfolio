import React, { useRef } from 'react'

import greatfind from './greatfindwebsite.png'
import siteArrow from './site-arrow.png'

const Works = React.forwardRef((props, ref) => {

    const worksRef = useRef(null);

    return (
        <div id='workslinker' ref={worksRef} className='works-container one'>
            <div className="project-content-container">
                <div className="works-header one">
                    <h1>02 / 05</h1>
                </div>
                <div className="project-container one">
                    <h1>Greatfind.AI - AI Based Automobile Marketplace</h1>
                    <div className="skills-section one">

                        <button>TAILWIND CSS</button>
                        <button>HTML</button>
                        <button>REACT</button>
                        <button>RESPONSIVE DESIGN</button>
                        <button>FIGMA</button>
                    </div>
                    <div className="project-info one">
                        <div className="project-title">
                            <h3>Project</h3>
                            <h2>Greatfind.AI</h2>
                        </div>
                        <div className="project-role">
                            <h3>Role</h3>
                            <h2>Frontend Lead</h2>
                        </div>
                        <div className="project-date">
                            <h3>Date</h3>
                            <h2>July 2024</h2>
                        </div>
                    </div>
                    <div className="project-link one">
                        <button><a target='blank' href='https://greatfindpari.vercel.app'>Go to Site</a></button>
                    </div>
                </div>
            </div>
            <div className="project-image-container">
                <div className="project-image">
                    <img src={greatfind}></img>
                </div>
            </div>
        </div>
    )
});

export default Works;
