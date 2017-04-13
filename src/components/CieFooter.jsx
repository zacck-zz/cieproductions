import React, {Component} from 'react'

export class CieFooter extends Component {
  render() {
    return(
      <div>
        <div className="foot text-center">
          <img className="about-logo" src={require('../assets/medium_footer_logo.png')}></img>
        </div>
      </div>
    )
  }
}

export default CieFooter;
