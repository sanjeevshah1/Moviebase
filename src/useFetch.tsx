import { useState, useEffect } from 'react';
import { ErrorType} from './Types';

const useFetch = (query: string, page:number) => {
  const apiKey = import.meta.env.VITE_API_KEY;


  const apiUrl = query ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false` : `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query="jurassic"&page=${page}&include_adult=false` ;

  const [movies, setMovies] = useState<{}[]>([]); // Change to appropriate type if known
  console.log(typeof(movies))
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    console.log("page changed")
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw {
            message: "Error in fetching the search results",
            statusText: "Failed",
            status: "Failed",
          } as ErrorType;
        }
        const movieData = await response.json();
        setMovies((prevMovies) => {
          if (page === 1) {
            return movieData.results;
          } else {
            return [...prevMovies, ...movieData.results];
          }
        });
        setError(null);
      } catch (err) {
        setError(err as ErrorType);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query,page]); // Dependency array to refetch when query changes

  return { movies, isLoading, error };
};

export default useFetch;
