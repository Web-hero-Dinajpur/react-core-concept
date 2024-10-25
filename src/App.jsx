import { useState } from 'react'
import './App.css'
import Counter from './Counter';
import Play from './Play';
import Users from './Users';
import Friends from './Friends';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Reat core concept 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Play></Play>
      <Counter></Counter>
      
    </>
  )
}

export default App
