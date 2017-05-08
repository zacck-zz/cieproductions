import React, {Component} from 'react'

export class CieFooter extends Component {
  render() {
    return(
      <div>
        <div className="foot text-center">
          <img className="about-logo" src={require('../assets/medium_footer_logo.png')}></img>
          <div className="social-box">
            <div className="columns small-2 social-child">
              <img className="social-logo" src={require('../assets/social/linkedin.png')}></img>
            </div>
            <div  className="columns small-2 social-child">
              <img className="social-logo" src={require('../assets/social/facebook.png')}></img>
            </div>
            <div  className="columns small-2 social-child">
              <img className="social-logo" src={require('../assets/social/vimeo.png')}></img>
            </div>
            <div  className="columns small-2 social-child">
              <img className="social-logo" src={require('../assets/social/twitter.png')}></img>
            </div>
            <div  className="columns small-2 social-child">
              <img className="social-logo" src={require('../assets/social/youtube.png')}></img>
            </div>
            <div  className="columns small-2 social-child">
              <img className="social-logo" src={require('../assets/social/instagram.png')}></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CieFooter;
