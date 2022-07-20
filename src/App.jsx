import { useState } from 'react'
import reactLogo from './assets/img/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
   <Navbar/>
   </div>
  )
}

export default App
