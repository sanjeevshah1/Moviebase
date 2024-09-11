import { MoreProps } from "../Types"
const More = ({setPage}: MoreProps) => {
    const handleClick = () => {
        setPage((prevPage) => prevPage + 1)
    }
  return (
    <div className="more">
        <button onClick={handleClick}>Show More</button>
    </div>
  )
}

export default More