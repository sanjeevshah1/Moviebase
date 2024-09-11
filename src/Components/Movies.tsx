import MovieCard from "./MovieCard"
import useFetch from "../useFetch.tsx"
import { searchProps } from "../Types.ts"
const Movies = ({searchQuery} : searchProps) => {
    console.log(searchQuery , "movies")
    const {movies, isLoading, error} = useFetch(searchQuery)
    console.log(movies)
    if(error) return (
        <h2>Error</h2>
    )
    while(isLoading) return(
        <h2>Loading.......</h2>
    );
    return (
        <div className="movies">
            {movies?.results?.map((movie: any) =>{
                return <MovieCard imgUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.original_title} date={movie.release_date} rating = {movie.vote_average} about = {movie.overview}/>
            })}
        </div>
    )
}

export default Movies