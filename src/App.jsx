import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/loginpage';
import RegistrationPage from './components/registrationpage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
      </Switch>
    </Router>
  );
}

export default App;
