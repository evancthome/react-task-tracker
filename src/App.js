import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)
  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddTasks(!showAddTasks)}
          showAdd={showAddTasks}
          title='Task Tracker'
        />

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
