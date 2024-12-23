import {ChangeEvent, FormEvent} from "react"
import { MovieSearchProps } from "../Types";
const MovieSearch = ({searchQuery, setSearchQuery, setSearchParams} : MovieSearchProps) => {
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setSearchParams({language:""});
    }
  return (
    <>
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="query">Movie Name</label>
            <input 
                type="text"
                id="query"
                name="query"
                placeholder="i.e. Jurassic Park"
                onChange={handleChange}
                value={searchQuery}
                className="bounce-top"
                />
        </form>
    </>
  )

}

export default MovieSearch