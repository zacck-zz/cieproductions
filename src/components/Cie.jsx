import React, {Component} from 'react'
import CieBar from 'CieBar'


export class Cie extends Component {
  render() {
    return(
      <div>
        <CieBar/>
        {this.props.children }
      </div>
    )
  }
};

export default Cie;
