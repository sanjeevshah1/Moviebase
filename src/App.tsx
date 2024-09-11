import './App.css'
import Header from './Components/Header'
import MovieSearch from './Components/MovieSearch'
import Movies from './Components/Movies'
import { useState } from 'react'
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className='moviebase'>
      <Header />
      <MovieSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Movies searchQuery = {searchQuery}/>
    </div>
  )
}

export default App
