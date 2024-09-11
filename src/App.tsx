import './App.css'
import Header from './Components/Header'
import MovieSearch from './Components/MovieSearch'
import Movies from './Components/Movies'
import { useState } from 'react'
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (event: any) => {
      setSearchQuery(event.target.value)
  }
  console.log(searchQuery)
  return (
    <div className='moviebase'>
      <Header />
      <MovieSearch handleChange = {handleChange} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Movies searchQuery = {searchQuery}/>
    </div>
  )
}

export default App
