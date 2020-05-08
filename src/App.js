import React from 'react';
import Login from './pages/login.js';
import Dash from './pages/dash.js';
import Register from './pages/register.js';
import Landing from './pages/dash.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {
  return(
<div>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Dash} />
    </Switch>
  </BrowserRouter>
</div>
  );
}

export default App;
