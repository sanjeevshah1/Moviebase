
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
}
export type MoreProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>; // Type for the setPage function that updates a number state
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
  }
  