import { useState } from "react"
import MovieCard from "./MovieCard"
import useFetch from "../useFetch.tsx"
import Filters from "./Filters.tsx"
import { useEffect } from "react"
import { Link, useLocation,useSearchParams } from "react-router-dom"
import MovieSearch from "./MovieSearch.tsx"
import More from "./More.tsx"
const Movies = () => {
    const passedState = useLocation().state;
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(passedState)
    const prevSearchQuery = passedState?.searchQuery;
    const prevLang = passedState?.language;
    if(prevLang) setSearchParams({language:prevLang});
    const [searchQuery, setSearchQuery] = useState(prevSearchQuery || "");
    const [page, setPage] = useState(1);
    const filterLang = searchParams.get("language") || prevLang || "";  
    const [size, setSize] = useState(0);
    const {movies, isLoading, error} = useFetch(searchQuery,page)
    
    useEffect(()=>{
        setSize(movies.length);
    },[movies]);

    if(error) return (
        <h2>Error</h2>
    )

    while(isLoading) return(
        <h2>Loading.......</h2>
    );

    const filteredMovies = filterLang ? movies.filter((movie) =>{
       return movie.original_language === filterLang;
    }) : movies;

    return (
        <div className="movies-container">
            <MovieSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterLang={filterLang} setSearchParams={setSearchParams}/>
            <Filters movies={movies} filterLang={filterLang}  setSearchParams={setSearchParams}/>
            <div className="movies tilt-in-top-1">
                {filteredMovies?.map((movie: any) =>{
                    return (
                        <Link to={`/movie/${movie.id}`}
                            state={
                                {
                                    searchQuery,
                                    language: filterLang
                                }
                            }
                        >
                        <MovieCard key={movie.id} imgUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.original_title} date={movie.release_date} rating = {movie.vote_average} about = {movie.overview} />
                        </Link>
                    );
                })}
            </div>
            <More setPage={setPage} size={size}/>
        </div>
    )
}

export default Movies