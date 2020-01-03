import React from 'react'

const Project = ({project}) => {
  return (
    <div className="project">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  )
}

export default Project
