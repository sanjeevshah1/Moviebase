const MovieCard = ({imgUrl, title, date, rating, about}) => {
  return (
    <div className="movie-card">
        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        <p>RELEASE DATE: {date}</p>
        <p>RATING: {rating}</p>
        <p>{about}</p>
    </div>
    // <div className="movie-card">
    //     <img src={temp} alt="movie-poster" />
    //     <h2>Endgame</h2>
    //     <p>RELEASE DATE: 2009--1-18</p>
    //     <p>RATING: 5.8</p>
    //     <p>The time is the late '80s, a crucial period in the history of South Africa. President P.W. Botha is hanging on to power by a thread as the African National Congress (ANC) takes up arms against apartheid and the country tumbles toward insurrection. A British mining concern is convinced that their interests would be better served in a stable South Africa and they quietly dispatch Michael Young, their head of public affairs, to open an unofficial dialogue between the bitter rivals. Assembling a reluctant yet brilliant team to pave the way to reconciliation by confronting obstacles that initially seem insurmountable, Young places his trust in ANC leader Thabo Mbeki and Afrikaner philosophy professor Willie Esterhuyse. It is their empathy that will ultimately serve as the catalyst for change by proving more powerful than the terrorist bombs that threaten to disrupt the peaceful dialogue.</p>
    // </div>
  )
}

export default MovieCard