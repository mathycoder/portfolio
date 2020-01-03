import React, { Component } from 'react'
import Project from './Project'
import './projects.css'
import { myProjects } from './projectData.js'

class Projects extends Component {
  render(){
    return (
      <div className="projects">
        <h1>Projects Page</h1>
        {myProjects.map(project => (
          <Project project={project}/>
        ))}

      </div>
    )
  }

}

export default Projects
