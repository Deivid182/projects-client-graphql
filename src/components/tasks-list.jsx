import TaskCard from './task-card'

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  )
}

export default TaskList