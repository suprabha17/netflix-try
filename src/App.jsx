import { useState } from 'react'
import Body from './component/Body.jsx'
import './App.css'
import Login from './component/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Body/>
    </div>
  )
}

export default App
