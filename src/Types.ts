
export type ErrorType = {
    message: string;
    statusText: string;
    status: string;
}
export type searchProps = {
    searchQuery: string;
    page:number;
}

export type MovieCardProps = {
    imgUrl: string;
    title: string;
    date: string;
    rating: string; 
    about: string;
}

export type MovieSearchProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filterLang: string;
    setSearchParams: ({ language }: { language: string }) => void;
}
export type MoreProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>; // Type for the setPage function that updates a number state
    size: number;
};  


  
export interface FetchResult {
    movies: any[];
    isLoading: boolean;
    error: any;
  }

// src/Types.ts
export interface OutletContextType {
    searchQuery: string;
    page: number;
    filterLang: string,
    setFilterLang: ([language]: string) => void;
    setSize: ([]: number) => void
  }
  
export type Movie = {
    original_language: string;
  };
  
  export type FiltersProps = {
    movies: Movie[];
    filterLang: string;
    setSearchParams: ({ language }: { language: string }) => void;  // Corrected the function signature
  };

  export interface Genre {
    id: number;
    name: string;
  }
  
  export interface MovieType {
    backdrop_path: string;
    poster_path: string;
    title: string;
    tagline: string;
    overview: string;
    release_date: string;
    runtime: number;
    genres: Genre[];
    budget: number;
    revenue: number;
    imdb_id: string;
    homepage: string;
    vote_average: number;
    vote_count: number;
  }