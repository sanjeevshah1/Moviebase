import { Movie } from "../Types";
import { FiltersProps } from "../Types";
import { Languages } from "../Languages";

const Filters = ({ movies,filterLang, setSearchParams }: FiltersProps) => {
    const uniqueLanguages = new Set(movies.map((movie: Movie) => movie.original_language));
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const selectedLanguage = event.currentTarget.getAttribute("data-language");
        if (selectedLanguage) {
            setSearchParams({ language: selectedLanguage });

        }
    };

    return (
        <div className="filter-container">
            <h2>Filter results by original language</h2>
            <div className="filters flex">
                <div className="buttons flex">
                    {[...uniqueLanguages].map((language) => (
                        <button 
                            data-language={language}
                            key={language}
                            onClick={handleClick}
                        >
                            {Languages[language] ? Languages[language] : "Unknown"}
                        </button>
                    ))}
                </div>
            {filterLang && <button className="clear" style={{marginLeft:"auto", marginRight:"40px"}} 
                onClick={
                    () => setSearchParams({language:""})
                }>Clear filter......</button>}
            </div>
        </div>
    );
};

export default Filters;
