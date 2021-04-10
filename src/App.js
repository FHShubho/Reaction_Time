import Home from './Home';
import Navbar from './Navbar';
import Scoreboard from './Scoreboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/Scoreboard'>
              <Scoreboard />
            </Route>
          </Switch>
        </div>
      
      </div>
    </Router>
    
  );
}

export default App;
