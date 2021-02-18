import React from 'react';
// import { lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import './app.scss';

import { appHistory } from './app/common/util';
import { Home } from './app/modules/home';

function App() {
  return (
    <div className="App">
      {/* <Content> */}
      <Router history={appHistory}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      {/* </Content> */}
    </div>
  );
}

export default App;
