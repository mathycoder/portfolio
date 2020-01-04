import React from 'react'

const Project = ({project}) => {
  return (
    <div className="project">
      <div className="project-title">
        <img className="project-title-image" src={project.titleImage}/>
        <div className="iframe-and-links">
          <iframe
            title="video preview"
            id="video" type="text/html"
            width="300" height="200"
            src={project.demoUrl}
            frameBorder="0"
            allowFullScreen
            >
          </iframe>
          <a href={project.githubUrl} target="_blank">
            <img className="github-logo" src="/images/github.png" alt="github icon"/>
          </a>
        </div>
      </div>
      <div className="description">
        <p>{project.description}</p>
        <div className="bulletpoints">
          <ul>
            {project.bullets.map(bullet => <li>{bullet}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project
