
import Accordian from './Accordian'
import './App.css'

function App() {

  const items = [
    {
      title: 'Javascript Basics',
      content: 'Learn Variables, functions and loops in Javascript'
    },
    {
      title: 'ReactJS Overview',
      content: 'Understand components,state and props in React'
    },
    {
      title: 'Node Js',
      content: 'Basics of serer side development with Node js'
    },
    {
      title: 'Full Stack Development',
      content: 'Build full stack apps with React and Node js'
    },
  ]

  return (
    <>
      <Accordian items={items} />
    </>
  )
}

export default App
