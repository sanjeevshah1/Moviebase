import './App.css'
import Header from './Components/Header'
import MovieSearch from './Components/MovieSearch'
import More from './Components/More'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { OutletContextType } from './Types'
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [filterLang, setFilterLang] = useState("");
  const outletContext: OutletContextType = {
    searchQuery,
    page,
    filterLang,
    setFilterLang,
  };
  console.log(page)
  return (
    <div className='moviebase'>
      <Header />
      <MovieSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterLang={filterLang} setFilterLang={setFilterLang}/>
      <Outlet context={outletContext}/>
      <More setPage={setPage}/>
    </div>
  )
}

export default App
