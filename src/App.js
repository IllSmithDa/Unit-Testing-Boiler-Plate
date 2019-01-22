import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
