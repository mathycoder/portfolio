import React from 'react'

const Project = ({project}) => {
  return (
    <div className="project">
      <h2>{project.title}</h2>
      <div className="project-first-row">
        <div>
          <p>{project.description}</p>
        </div>
        <div>
          <iframe
            title="video preview"
            id="video" type="text/html"
            width="400" height="240"
            src={project.demoUrl}
            frameBorder="0"
            allowFullScreen
            >
          </iframe>
        </div>
      </div>
      <div className="project-second-row">
        <div>
          <img className="project-media-image" src={project.appImage}/>
        </div>
        <div className="bulletpoints">
          <ul>
            {project.bullets.map(bullet => <li>{bullet}</li>)}
          </ul>
          <a href={project.githubUrl} target="_blank">
            <img className="github-logo" src="/images/github.png" alt="github icon"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
