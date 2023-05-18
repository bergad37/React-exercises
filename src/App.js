import { Navbar } from './Navbar';
import { Home } from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';


function App() {
  //const person={name:'Yosh',age:30}
  return (
    <Router>
    <div className="App">
    <Navbar />
      <div className="content">
    <Switch >
         <Route exact path="/">  {/*For the home page the path is */}
            <Home />
         </Route>
         <Route path="/create">  {/*For the Create blog page the path is */}
            <Create />
         </Route>
         <Route path="/blogs/:id">  {/*For the get one blog page the path is */}
            <BlogDetails />
         </Route>
    </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
