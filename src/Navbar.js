
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className='navbar'>
    <h1>The Djogo blog</h1>
    <div>
    <Link to="/">Home</Link>
    <Link to="/create">New blog</Link>
    </div>
    </nav>
  )
}
