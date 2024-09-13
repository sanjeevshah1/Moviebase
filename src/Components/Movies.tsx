import MovieCard from "./MovieCard"
import useFetch from "../useFetch.tsx"
import { useOutletContext } from "react-router-dom"
import { OutletContextType } from "../Types.ts"
import Filters from "./Filters.tsx"
import { useEffect } from "react"
const Movies = () => {
    const OutletContext:OutletContextType = useOutletContext();
    const {searchQuery, page,filterLang,setFilterLang,setSize} = OutletContext
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
            <Filters movies={movies} filterLang={filterLang} setFilterLang = {setFilterLang}/>
            <div className="movies tilt-in-top-1">
                {filteredMovies?.map((movie: any) =>{
                    return <MovieCard key={movie.id} imgUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.original_title} date={movie.release_date} rating = {movie.vote_average} about = {movie.overview} />
                })}
            </div>
        </div>
    )
}

export default Movies