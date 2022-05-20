import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className='project-wrap'>
      <div className="overlay">
        <a href='/' className="project-name">{props.projectName}</a>
      </div>

      <img src={props.projectImg} alt={props.alt} />
    </div>
  )
}

ProjectCard.defaultProps = {
    alt: "Project Alt"
}

export default ProjectCard
