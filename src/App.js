import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './component/Register';
import RegisterSuccess from './component/RegisterSuccess';
import RegisterNew from './component/RegisterNew';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Register} />
      <Route path="/success" component={RegisterSuccess} />
      <Route path="/RegisterNew" component={RegisterNew} />
    </Switch>
    // <div className="App">
    //   <Register />
    // </div>
  );
}

export default App;
