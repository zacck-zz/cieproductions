import React, {Component} from 'react'
import CieBar from 'CieBar'
import CieFooter from 'CieFooter'


export class Cie extends Component {
  render() {
    return(
      <div>
        <CieBar/>
        {this.props.children}
        <CieFooter/>
      </div>
    );
  }
};

export default Cie;
