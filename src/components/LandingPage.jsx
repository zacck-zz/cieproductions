import React, {Component} from 'react'
export class LandingPage extends Component {
  render() {
    return(
      <div className="l-page">
        <div className="text-center">
          <img className="color-logo" src={require('../assets/color_logo.png')}></img>
        </div>
        <div className="text-center">
          <div className="carla-quote">{`"I live my life with stories that came before me.`}</div>
          <div className="carla-quote">{`I tell stories becade of the stories that were told before"`}</div>
          <p className="quote-name">Carla Inez Espost</p>
        </div>
      </div>
    );
  }
};
export default LandingPage;
