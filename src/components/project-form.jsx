import { useMutation } from '@apollo/client'
import { CREATE_PROJECT, GET_PROJECTS } from '../api/projects'
import { useState } from 'react'

const ProjectForm = () => {

  const [project, setProject] = useState({
    name: '',
    description: ''
  })

  const [createProject, { loading, error, data }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [{
      query: GET_PROJECTS,
    },
      "getProjects"
    ]
  })

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (project.name === '' || project.description === '') {
      return
    }

    createProject({
      variables: {
        name: project.name,
        description: project.description
      }
    })

    setProject({
      name: '',
      description: ''
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}
      <input disabled={loading} value={project.name} onChange={handleChange} type="text" placeholder="Name" name='name' />

      <textarea disabled={loading} value={project.description} onChange={handleChange} placeholder="Description" name='description' />
      <button disabled={loading || !project.name || !project.description}>Add Project</button>
    </form>
  )
}

export default ProjectForm