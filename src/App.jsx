
import React, { Component } from 'react';

import  Home  from './Components/Home';
import  About  from './Components/About';
import  Contact  from './Components/Contact';
import NavBar from './Components/CustomNavBar';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import './App.css';

class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <NavBar/>
          <Route exact path ="/" component={Home}/>
          <Route path ="/about" component={About}/>
          <Route path ="/Contact" component={Contact}/>
        </div>
      </Router>
       
    ) 

  }

}

export default App;
