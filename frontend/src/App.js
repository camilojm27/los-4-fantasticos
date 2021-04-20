import React from 'react'

import './App.css'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './pages'
import Management from './pages/Management/Management'



function App() {
  return (
    <Router>
  
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Management" component={Management} exact/>
      </Switch>
    </Router>
  );
}

export default App;
