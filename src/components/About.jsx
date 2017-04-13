import React,{Component} from 'react'

class About extends Component {
  render() {
    return(
      <div className="about-page">
        <div className="top-section">
          <p className="text-center we-are">WE ARE VISUAL STORIES</p>
          <div className="about-story text-center">
            <div>{`We are passionate about immersive cinematic narratives and firmly`}</div>
            <div>{`believe that Virtual Reality will strengthen the power of good stories.`}</div>
            <div>{` `}</div>
          </div>
        </div>
        <div className="pimages text-center">
          <div className="blkbg">
            <img className="profile-pic" src={require('../assets/me.png')}></img>
            <div className="thin-names">{`Carla Espost`}</div>
          </div>
          <div className="blkbg">
            <img className="profile-pic" src={require('../assets/chexz.png')}></img>
            <div className="thin-names">{`Cheslin Siebritz`}</div>
          </div>
          <div className="blkbg">
            <img className="profile-pic" src={require('../assets/aphelele.png')}></img>
            <div className="thin-names">{`Aphelele Mantshiyose`}</div>
          </div>
          <div className="blkbg">
            <img className="profile-pic" src={require('../assets/maishe.png')}></img>
            <div className="thin-names">{`Maishe Mosala`}</div>
          </div>
        </div>
      </div>
    )
  };
};

export default About;
