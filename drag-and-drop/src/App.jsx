import { useState } from 'react'
import './App.css'
import Notes from './components/Notes'

function App() {
  const [notes, setNotes] = useState([{
    id: 1,
    text: "Hi this is just a simple note text"
  },
  {
    id: 2,
    text: "Text note description"
  }])



  return (
    <>
      <div>
        <Notes notes={notes} setNotes={setNotes} />
      </div>
    </>
  )
}

export default App
