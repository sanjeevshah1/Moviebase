import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieType } from "../Types";
const Movie = () => {
  const navigate = useNavigate();
  const passedState = useLocation().state;
  const { searchQuery, language} = passedState || {};
  const apiKey = import.meta.env.VITE_API_KEY;
  const {id} = useParams();
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const [movie, setMovie] = useState<MovieType>({
    backdrop_path: "",
    poster_path: "",
    title: "",
    tagline: "",
    overview: "",
    release_date: "",
    runtime: 0,
    genres: [],
    budget: 0,
    revenue: 0,
    imdb_id: "",
    homepage: "",
    vote_average: 0,
    vote_count: 0,
  });
  const fetchData = async () =>{
    const response = await fetch(apiUrl);
    const data = await response.json();
    setMovie(data);

  }
  console.log(movie)
  useEffect(() => {

    fetchData();
  },[id])
  const handleBack = () => {
    // If searchQuery and movies are available, navigate with state
    if (searchQuery) {
      navigate("..", { state: { searchQuery, language } });
    } else {
      // Fallback to default back navigation
      navigate(-1);
    }
  };
  return (
    <div className="movie-container">
      <div className='temp'>
        <Link to="/">Movie Ghar</Link>
        <p>.....(Let's Search)</p>
    </div>
    <div className="movie-backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
      <div className="movie-content">
          <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-details">
          <button className="back" onClick={handleBack}>Back</button>
          <h1>{movie.title}</h1>
          <p className="tagline">{movie.tagline}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
          <p><strong>Genres:</strong>{movie.genres.map(genre => genre.name).join(', ')}</p>
          <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
          <p><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</p>
          <p><strong>IMDB ID:</strong> {movie.imdb_id}</p>
          <p><strong>Homepage:</strong> <a href={movie.homepage} target="_blank" rel="noreferrer">{movie.homepage}</a></p>
          <p><strong>Vote Average:</strong> {movie.vote_average} / 10 ({movie.vote_count} votes)</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Movie