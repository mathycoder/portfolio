import React from 'react'

const Project = ({project}) => {
  return (
    <div className="project">
      <h2>{project.title}</h2>
      <iframe
        title="video preview"
        id="video" type="text/html"
        width="360" height="220"
        src={project.demoUrl}
        frameBorder="0"
        allowFullScreen
        >
      </iframe>
      <p>{project.description}</p>
      <a href={project.githubUrl} target="_blank">
        <img className="github-logo" src="/images/github.png" alt="github icon"/>
      </a>
    </div>
  )
}

export default Project
