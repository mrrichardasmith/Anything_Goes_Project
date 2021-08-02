import './App.css';
import faker from  'faker'; 
import Table from '../Table/Table';
import FakerData from '../FakerData/FakerData';
import Charts from '../Charts/Charts';
import Home from '../Home/Home';
import About from '../About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
    
export default function App() {
  
      return (
        <>
        <div className="container">
          <div className="header">
            <h1 className="title">The Anything Goes Project</h1>
            <h3 className="description">A project space for collaboration and practicing skill gaps.</h3>
            <br />
          </div>
        </div>
        <Router>
          <div>
            <nav>
              <ul className="row nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/charts">Charts</Link>
                </li>
                <li>
                  <Link to="/table">Data Table</Link>
                </li>
                <li>
                  <Link to="/faker_data">Faker</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/charts">
                <Charts />
              </Route>
              <Route path="/table">
                <Table />
              </Route>
              <Route path="/faker_data">
                <FakerData />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        </>
      );
    };

