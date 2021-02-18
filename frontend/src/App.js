import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Map from './Pages/Map';
import Settings from './Pages/Settings';
import Dashboard from './Pages/Dashboard';
import HelpConter from './Pages/HelpCenter';
import Graphs from './Pages/Graphs';
import Planning from './Pages/Planning';
import Alert from './Pages/Alert';
import Report from './Pages/Report';

function App() {
  return (
  
    <>
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/help' component={HelpConter} />
          <Route path='/' exact component={Dashboard} />
          <Route path='/settings' component={Settings} />
          <Route path='/graphs' component={Graphs} />
          <Route path='/planning' component={Planning} />
          <Route path='/alert' component={Alert} />
          <Route path='/report' component={Report} />
          <Route path='/map' component={Map} />
        </Switch>
      </Router>
    </>
   
  );
}

export default App;