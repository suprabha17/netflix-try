import { useState } from 'react'
import Body from './component/Body.jsx'
import { Provider } from 'react-redux';
import './App.css'
import appStore from './utils/appStore.js';
import Login from './component/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Provider store={appStore}>
      <Body/>
      </Provider>
    </div>
  )
}

export default App
