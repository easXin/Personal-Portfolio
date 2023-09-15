import React from 'react'
import './Projects.css'
import { v4 as uuidv4 } from 'uuid';
function Projects() {
    const projects = [
        {
            "title": "Studying Group Chat (Java & AWS)",
            "image": "chattingApp.jpg",
            "url": "https://github.com/easXin/Studying-Buddies",
            "tag": "studying together"
        },
        {
            "title": "Note-Taking (Android & SQL)",
            "image": "noteTaking.jpg",
            "url": "https://github.com/easXin/Note-Taking-App"
        },
        {
            "title": "Tic-Tac-Toe (Python)",
            "image": "ticTacToe.jpg",
            "url": "https://github.com/easXin/Tic-Tac-Toe"
        },
        {
            "title": "Covid 19 Tracker (React & FireBase)",
            "image": "covid19.jpg",
            "url": "https://github.com/easXin/covid-19-tracker"
        },
        {
            "title": "Personal Portfolio (React & JSON)",
            "image": "portfolio.jpg",
            "url": "https://github.com/easXin/Personal-Portfolio"
        },
        {
            "title": "LinkedIn Clone (React & FireBase)",
            "image": "linkedin.jpg",
            "url": "https://github.com/easXin/linkedin-app"
        },
        {
            "title": "Netflix Clone (React & FireBase)",
            "image": "netflix.jpg",
            "url": "https://github.com/easXin/netflix-app"
        },
        {
            "title": "Spotify Clone (React & FireBase)",
            "image": "spotify.jpg",
            "url": "https://github.com/easXin/Spotify-clone"
        },
        {
            "title": "Amazon Clone (React & FireBase)",
            "image": "amazon.jpg",
            "url": "https://github.com/easXin/amazon-clone"
        }
    ]

    const projectData = projects.map(project => {
        let imgUrl = "./images/portfolio/" + project.image;
        return (
            <div className="project fill item-wrap" key={uuidv4()}>
                <a href={project.url} title={project.title}>
                    <img src={imgUrl} alt={project.tag} title={project.title} />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                            <h5>{projects.title}</h5>
                        </div>
                    </div>
                </a>
            </div>
        )
    })

    return (
        <div id="projects">
            <div className="projects__title titleFont">
                <h2>Projects</h2>
                <hr />
            </div>
            <div className="projects__detail">
                <div className="container">
                    {projectData}
                </div>
            </div>
        </div>
    )
}

export default Projects
