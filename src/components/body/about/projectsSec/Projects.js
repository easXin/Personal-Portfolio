import React from 'react'
import './Projects.css'

function Projects() {
    return (
        <div id="projects">
            <div className="projects__title">
                <h2>Projects</h2>
                <hr />
                <p>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                    ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                    ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                </p>
            </div>
            <div className="projects__detail">
                <div className="container">
                    {/* <h2>Box 1</h2> */}
                    <div className="project fill">
                        <img src="doggy.JPG" alt="doggy" />
                    </div>
                    <div className="project fill">
                        <img src="doggy.JPG" alt="doggy" />
                    </div>
                    <div className="project fill">
                        <img src="doggy.JPG" alt="doggy" />
                    </div>
                    <div className="project fill">
                        <img src="doggy.JPG" alt="doggy" />
                    </div>
                    <div className="project fill">
                        <img src="doggy.JPG" alt="doggy" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
