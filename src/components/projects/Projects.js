import React, { Component } from 'react'
import Project from './Project'
import './projects.css'
import { myProjects } from './projectData.js'

class Projects extends Component {
  state = {
    projectId: null,
    project: null
  }

  componentDidMount(){
    const project = myProjects.find(proj => proj.id === 1)
    this.setState({
      projectId: 1,
      project: project

    })
  }

  handleIconClick = (proj) => {
    this.setState({
      projectId: proj.id,
      project: proj

    })
  }

  render(){
    const { project, projectId } = this.state
    return (
      <div className="projects">
        <h1>My Projects</h1>
        <div className="project-icons">
        {myProjects.map(proj => (
          <div
            onClick={e => this.handleIconClick(proj)}
            className={`project-icon ${projectId === proj.id ? 'selected' : ''}`}>
            <img src={proj.titleImage} alt={`${proj.title} logo`}/>
          </div>
        ))}
        </div>
        {project ? <Project project={project}/> : ''}
      </div>
    )
  }

}

export default Projects
