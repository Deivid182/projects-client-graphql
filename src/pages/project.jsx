import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { GET_PROJECT } from '../api/projects'
import TaskForm from '../components/task-form'
import TaskList from '../components/tasks-list'

const Project = () => {

  const { projectId } = useParams()
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: {
      id: projectId
    },
    skip: projectId === undefined
  })


  if (loading) return <p>Loading...</p>

  if (error) return <p>Error : {error.message}</p>

  return (
    <div>
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>
      <button>
        Delete
      </button>
      <TaskForm />
      <TaskList tasks={data.project.tasks} />
    </div>
  )
}

export default Project