import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className='moviebase'>
      <Header />
      <Outlet/>
    </div>  
  )
}

export default App
