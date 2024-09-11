import './App.css'
import Header from './Components/Header'
import MovieSearch from './Components/MovieSearch'
import More from './Components/More'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
// import { OutletContextType } from './Types'
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const outletContext:any = {
    page,
    searchQuery,
  }
  console.log(page)
  return (
    <div className='moviebase'>
      <Header />
      <MovieSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Outlet context={outletContext}/>
      <More setPage={setPage}/>
    </div>
  )
}

export default App
