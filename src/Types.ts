export type ErrorType = {
    message: string;
    statusText: string;
    status: string;
}
export type searchProps = {
    searchQuery: string;
}

export type MovieCardProps = {
    imgUrl: string;
    title: string;
    date: string;
    rating: string; 
    about: string;
}