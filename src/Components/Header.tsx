import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
        <Link to="/">Movie Ghar</Link>
        <p>.....(Let's Search)</p>
    </div>
  )
}

export default Header