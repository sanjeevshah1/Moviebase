import MovieCard from "./MovieCard"
import useFetch from "../useFetch.tsx"
import { useOutletContext } from "react-router-dom"
import { OutletContextType } from "../Types.ts"
const Movies = () => {
    const {page, searchQuery} = useOutletContext<OutletContextType>()
    const {movies, isLoading, error} = useFetch(searchQuery,page)
    if(error) return (
        <h2>Error</h2>
    )
    while(isLoading) return(
        <h2>Loading.......</h2>
    );
    console.log(movies)
    return (
        <div className="movies tilt-in-top-1">
            {movies?.map((movie: any) =>{
                return <MovieCard key={movie.id} imgUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.original_title} date={movie.release_date} rating = {movie.vote_average} about = {movie.overview} />
            })}
        </div>
    )
}

export default Movies