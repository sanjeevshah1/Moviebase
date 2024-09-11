import {ChangeEvent, FormEvent} from "react"
import { MovieSearchProps } from "../Types";
const MovieSearch = ({searchQuery, setSearchQuery} : MovieSearchProps) => {
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        console.log("done")
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }
  return (
    <>
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="query">Movie Name</label>
            <input 
                type="text"
                name="query"
                placeholder="i.e. Jurassic Park"
                onChange={handleChange}
                value={searchQuery}
                className="bounce-top"
                />
            {/* <button className="button">Search</button> */}
        </form>
    </>
  )

}

export default MovieSearch