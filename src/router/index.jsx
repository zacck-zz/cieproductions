import React from 'react'
import Cie from 'Cie'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'


function loadRoute(cb) {
 return (module) => cb(null, module.default);
}

function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Cie}>
      <IndexRoute
        getComponent= {(location, cb) => {
          System.import('LandingPage')
          .then(loadRoute(cb))
          .catch(errorLoading);
        }}
      />
    </Route>
  </Router>
);
