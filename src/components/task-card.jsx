import { useMutation } from '@apollo/client'
import { DELETE_TASK } from '../api/tasks'
const TaskCard = ({ task }) => {

  const [deleteTask, { loading, error, data }] = useMutation(DELETE_TASK, {
    refetchQueries: ['getProject'],
  })

  const handleDelete = () => {
    const confirm = window.confirm('Are you sure you want to delete this task?')

    if (confirm) {
      deleteTask({
        variables: {
          id: task._id
        }
      })
    }
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <button
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  )
}

export default TaskCard