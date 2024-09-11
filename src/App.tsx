import './App.css'
import Header from './Components/Header'
import MovieSearch from './Components/MovieSearch'
import Movies from './Components/Movies'
import More from './Components/More'
import { useState } from 'react'
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  console.log(page)
  return (
    <div className='moviebase'>
      <Header />
      <MovieSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Movies page = {page} searchQuery = {searchQuery}/>
      <More setPage={setPage}/>
    </div>
  )
}

export default App
