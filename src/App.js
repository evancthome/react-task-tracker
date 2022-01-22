import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Zoom meeting',
      day: 'March 5th at 4:30 PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Chair being delivered',
      day: 'March 6th at 5:30 PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Late lunch with co-workers',
      day: 'March 8th at 2:30 PM',
      reminder: false,
    },
  ])

  //Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      ),
    )
  }

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTasks(!showAddTasks)}
        showAdd={showAddTasks}
        title='Task Tracker'
      />
      {showAddTasks && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks'
      )}
    </div>
  )
}

export default App
