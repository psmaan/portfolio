import React, { useRef } from 'react'

import sipinor from './sipinor-showcase.png'
import siteArrow from './site-arrow.png'

const Works = React.forwardRef((props, ref) => {

    const worksRef = useRef(null);

    return (
        <div id='workslinker' ref={worksRef} className='works-container'>
            <div className="project-content-container">
                <div className="works-header">
                    <h1>01 / 05</h1>
                </div>
                <div className="project-container">
                    <h1>Sipinor - School Dashboard & Admin Management</h1>
                    <div className="skills-section">

                        <button>CSS</button>
                        <button>HTML</button>
                        <button>VANILLA JAVASCRIPT</button>
                        <button>RESPONSIVE DESIGN</button>
                        <button>FIGMA</button>
                    </div>
                    <div className="project-info">
                        <div className="project-title">
                            <h3>Project</h3>
                            <h2>Sipinor Designs</h2>
                        </div>
                        <div className="project-role">
                            <h3>Role</h3>
                            <h2>Frontend Lead</h2>
                        </div>
                        <div className="project-date">
                            <h3>Date</h3>
                            <h2>March 2024</h2>
                        </div>
                    </div>
                    <div className="project-link">
                        <button><a href='https://psmaan.github.io/school-dashboard'>Go to Site</a></button>
                    </div>
                </div>
            </div>
            <div className="project-image-container">
                <div className="project-image">
                    <img src={sipinor}></img>
                </div>
            </div>
        </div>
    )
});

export default Works;
