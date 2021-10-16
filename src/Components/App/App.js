import React, { useState, useEffect } from "react";
import './App.css';
import faker from  'faker'; 
import Tables from '../Table/LeesTableComponent';
import FakerData from '../FakerData/FakerData';
import Charts from '../Charts/Charts';
import Home from '../Home/Home';
import About from '../About/About';
import Search from '../Search/Search';
import DropDown from '../DropDown/DropDown';
import Fox from '../Fox/Fox';
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
                  <Link to="/fox">Fox Api</Link>
                </li>
                <li>
                  <Link to="/charts">Charts</Link>
                </li>
                <li>
                  <Link to="/search">Debounce Search</Link>
                </li>
                <li>
                  <Link to="/faker_data">Faker</Link>
                </li>
                  <Link to="/tables" >Tables</Link>
                <li>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/fox">
                <Fox />
              </Route>
              <Route path="/charts">
                <Charts />
              </Route>
              <Route path="/tables">
                <Tables />
              </Route>
              <Route path="/faker_data">
                <FakerData />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/dropdown">
              <DropDown />
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

