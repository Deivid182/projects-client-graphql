import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/${project._id}`}
    >
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </Link>
  )
}

export default ProjectCard