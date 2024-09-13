import { MoreProps } from "../Types"
const More = ({setPage,size}: MoreProps) => {
    const handleClick = () => {
        setPage((prevPage) => prevPage + 1)
    }
  return (
    <div className="more">
        {(size < 20) ? <h2>No more results</h2> : <button onClick={handleClick}>Show More</button>}
    </div>
  )
}

export default More