import React,{Component} from 'react'


class Contact extends Component {
  render() {
    return(
      <div>
        <div className="top-contact">
          <p className="aweeh text-center">AWEH BOET</p>
        </div>
        <div className="text-center blkbg">
          <p className="beige heavy">Keen to have a chat or have some questions?</p>
          <p className="beige heavy">We are always happy to meet up and share stories</p>
          <p className="beige">awehboet@cieproductions.co.za</p>
          <p className="beige">0842433874</p>
        </div>
        <div className="blkbg text-center">
          <img className="about-logo" src={require('../assets/color_logo.png')}></img>
        </div>
      </div>
    );
  }
}

export default Contact;
