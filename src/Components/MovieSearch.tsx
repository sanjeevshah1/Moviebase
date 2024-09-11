import { ChangeEvent, FormEvent, useState } from "react"
const MovieSearch = ({handleChange, searchQuery, setSearchQuery}) => {
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        console.log("done")
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
                />
            <button className="button">Search</button>
        </form>
    </>
  )

}

export default MovieSearch