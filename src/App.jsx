import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GrowthGame from './pages/root'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GrowthGame />
    </>
  );
}

export default App
