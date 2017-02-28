import React from 'react'
import ReactDOM from 'react-dom'
import router from 'src/router/'


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

//add styling

// load jquery and foundation in the window scope
import 'script-loader!jquery'
import 'script-loader!what-input'
import 'script-loader!foundation-sites'
require('./styles/app.scss')

//build a material-ui theme
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
injectTapEventPlugin();
const cietheme = getMuiTheme({
  palette: {
    primary1Color: "#f9d57e",
  },
  appBar: {
    height: 50,
  },
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={cieTheme}>
    {router}
  </MuiThemeProvider>,
  document.getElementById('app')
);
