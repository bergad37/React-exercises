import { Link } from "react-router-dom/cjs/react-router-dom.min"

const NotFound = () => {
  return (
    <div className="not-found">
    <h2>Sorry</h2>
    <p>The page is not found , <Link to='/'>Back to homepage</Link></p>
    
    </div>
  )
}

export default NotFound