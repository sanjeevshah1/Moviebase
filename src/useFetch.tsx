import { useState, useEffect } from 'react';
import { ErrorType } from './Types';

const useFetch = (query: string) => {
  const apiKey = import.meta.env.VITE_API_KEY;


  const apiUrl = query ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false` : `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query="jurassic"&page=1&include_adult=false` ;

  const [movies, setMovies] = useState<any>(null); // Change to appropriate type if known
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
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
        setMovies(movieData);
        setError(null);
      } catch (err) {
        setError(err as ErrorType);
        setMovies(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]); // Dependency array to refetch when query changes

  return { movies, isLoading, error };
};

export default useFetch;
