import React from 'react'
import ReactDOM from 'react-dom'

//load hot module on development
if(process.env.NODE_ENV === 'development') {
  if(module.hot) {
    module.hot.accept();
  }
}
if(process.env.NODE_ENV === 'production') {
  //lets install a service worker
  require('offline-plugin/runtime').install();
}

ReactDOM.render(
  <div>Hello CIE!</div>,
  document.getElementById('app')
);
