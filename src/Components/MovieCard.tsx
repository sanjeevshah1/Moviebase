import {MovieCardProps} from "./../Types"
const MovieCard = ({imgUrl, title, date, rating, about} :   MovieCardProps) => {
  return (
    <div className="movie-card">
        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        <p>RELEASE DATE: {date}</p>
        <p>RATING: {rating}</p>
        <p>{about}</p>
    </div>
  )
}

export default MovieCard