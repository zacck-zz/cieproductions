import React,{Component} from 'react'

class About extends Component {
  render() {
    return(
      <div className="about-page">
        <div className="top-section">
          <p className="text-center we-are">WE ARE VISUAL STORIES</p>
          <p className="about-story text-center">We are passionate about immersive cinematic narratives and firmly believe
            that Virtual Reality will strengthen the power of good stories</p>
        </div>
        <div className="pimages text-center">
          <div className="blkbg columns large-3 medium -3 small-6">
            <img className="profile-pic" src={require('../assets/me.png')}></img>
          </div>
          <div className="blkbg columns large-3 medium -3 small-6">
            <img className="profile-pic" src={require('../assets/chexz.png')}></img>
          </div>
          <div className="blkbg columns large-3 medium -3 small-6">
            <img className="profile-pic" src={require('../assets/aphelele.png')}></img>
          </div>
          <div className="blkbg columns large-3 medium -3 small-6">
            <img className="profile-pic" src={require('../assets/maishe.png')}></img>
          </div>
        </div>
      </div>
    )
  };
};

export default About;
