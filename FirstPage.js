import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// import our component
import ReportTime from "./ReportTime.js";
import Child from "./Child.js";


// main component of app is always one page (depending on url path) + Menu below
const App = () => {

  return (

    <Router>

      <Switch>
        <Route exact path="/Child" component={Child} />
        <Route path="/Child" component={Child} />
        <Route path="/ReportTime" component={ReportTime} />
        
      </Switch>

      <Menu/>

    </Router>

  );
};


export default App;