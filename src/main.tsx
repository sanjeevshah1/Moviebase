import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Movies from './Components/Movies.tsx'
import Movie from './Components/Movie.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Movies />}/>
          <Route path='home' element={<Movies />}/>
          <Route path='movie/:id' element={<Movie />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
