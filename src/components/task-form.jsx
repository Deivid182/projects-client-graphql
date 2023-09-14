import { useMutation } from '@apollo/client'
import { CREATE_TASK } from '../api/tasks'
import { useParams } from 'react-router-dom'

const TaskForm = () => {

  const [createTask, { loading, error, data }] = useMutation(CREATE_TASK, {
    refetchQueries: ['getProject'],
  })
  const params = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target.title.value === '') {
      return
    }

    createTask({
      variables: {
        title: e.target.title.value,
        projectId: params.projectId
      }
    })

    e.target.reset()
    e.target.title.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="title" name='title' placeholder='Title' />
      <button disabled={loading}>
        Add
      </button>
    </form>
  )
}

export default TaskForm