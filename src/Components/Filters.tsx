import { Movie } from "../Types";
import { FiltersProps } from "../Types";
import { Languages } from "../Languages";
const Filters = ({movies}:FiltersProps) => {
    const uniqueLanguages = new Set(movies.map((movie: Movie) => movie.original_language));
    console.log("unique is",uniqueLanguages)
    
    return (
        <div className="filter-container">
            <h2>Filter results by original language</h2>
            <div className="filters flex">
                <div className="buttons flex">
                    {[...uniqueLanguages].map((language) => (
                    <button key={language}>{
                        Languages[language] ? Languages[language] : "Unknown"
                        }</button>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Filters