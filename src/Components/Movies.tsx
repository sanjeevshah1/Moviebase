import MovieCard from "./MovieCard"
import useFetch from "../useFetch.tsx"
import { searchProps } from "../Types.ts"
const Movies = ({searchQuery,page} : searchProps) => {
    const {movies, isLoading, error} = useFetch(searchQuery,page)
    if(error) return (
        <h2>Error</h2>
    )
    while(isLoading) return(
        <h2>Loading.......</h2>
    );
    console.log(movies)
    return (
        <div className="movies">
            {movies?.map((movie: any) =>{
                return <MovieCard key={movie.id} imgUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.original_title} date={movie.release_date} rating = {movie.vote_average} about = {movie.overview}/>
            })}
        </div>
    )
}

export default Movies