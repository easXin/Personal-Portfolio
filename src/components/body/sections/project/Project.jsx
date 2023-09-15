import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../css/project.css';

import chattApp from '../../../../img/chattingApp.jpg';
import noteTaking from '../../../../img/noteTaking.jpg';
import ticTacToe from '../../../../img/ticTacToe.jpg';
import covid19 from '../../../../img/covid19.jpg';
import portfolio from '../../../../img/portfolio.jpg';
import linkedin from '../../../../img/linkedin.jpg';
import netflix from '../../../../img/netflix.jpg';
import spotify from '../../../../img/spotify.jpg';
import amazon from '../../../../img/amazon.jpg';

export default function ProjectComponent() {
  const projects = [
    {
      title: "Studying Group Chat (Java & AWS)",
      image: chattApp,
      url: "https://github.com/easXin/Studying-Buddies",
      tag: "studying together",
    },
    {
      title: "Note-Taking (Android & SQL)",
      image: noteTaking,
      url: "https://github.com/easXin/Note-Taking-App",
    },
    {
      title: "Tic-Tac-Toe (Python)",
      image: ticTacToe,
      url: "https://github.com/easXin/Tic-Tac-Toe",
    },
    {
      title: "Covid 19 Tracker (React & FireBase)",
      image: covid19,
      url: "https://github.com/easXin/covid-19-tracker",
    },
    {
      title: "Personal Portfolio (React & JSON)",
      image: portfolio,
      url: "https://github.com/easXin/portfolio",
    },
    {
      title: "LinkedIn Clone (React & FireBase)",
      image: linkedin,
      url: "https://github.com/easXin/linkedin-app",
    },
    {
      title: "Netflix Clone (React & FireBase)",
      image: netflix,
      url: "https://github.com/easXin/netflix-app",
    },
    {
      title: "Spotify Clone (React & FireBase)",
      image: spotify,
      url: "https://github.com/easXin/Spotify-clone",
    },
    {
      title: "Amazon Clone (React & FireBase)",
      image: amazon,
      url: "https://github.com/easXin/amazon-clone",
    },
  ];

  const projectData = projects.map((project) => (
    <div className="project fill item-wrap" key={uuidv4()}>
      <a href={project.url} title={project.title}>
        <img
          src={project.image}
          alt={project.tag}
          className="projectImg"
          title={project.title}
        />
        {/* <div className="overlay">
          <div className="portfolio-item-meta">
            <h5>{project.title}</h5>
          </div>
        </div> */}
      </a>
    </div>
  ));

  return (
    <div id="project">
      <div className="projects__detail">
        <div className="container">{projectData}</div>
      </div>
    </div>
  );
}