import React, { useRef } from 'react'

import kygo from './kygo-showcase.png'
import siteArrow from './site-arrow.png'

const Works = React.forwardRef((props, ref) => {
    const worksRef = useRef(null);

    return (
        <div ref={worksRef} className='works-container b'>
            <div className="project-content-container">
                <div className="works-header B">
                    <h1>02 / 05</h1>
                </div>
                <div className="project-container b">
                    <h1>John Doe - Freelance Software Developer</h1>
                    <div className="skills-section b">

                        <button>CSS</button>
                        <button>HTML</button>
                        <button>REACT.JS</button>
                        <button>RESPONSIVE DESIGN</button>
                    </div>
                    <div className="project-info b">
                        <div className="project-title">
                            <h3>Project</h3>
                            <h2>Sipinor Designs</h2>
                        </div>
                        <div className="project-role">
                            <h3>Role</h3>
                            <h2>Developer Lead</h2>
                        </div>
                        <div className="project-date">
                            <h3>Date</h3>
                            <h2>March 2024</h2>
                        </div>
                    </div>
                    <div className="project-link b">
                        <button>Go to Site</button>
                    </div>
                </div>
            </div>
            <div className="project-image-container">
                <div className="project-image">
                    <img src={kygo}></img>
                </div>
            </div>
        </div>
    )
});

export default Works;
