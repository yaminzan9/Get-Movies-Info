import React, { Component } from 'react';
import YouTube from 'react-youtube';

//https://youtu.be/6ZfuNTqbHE8
//https://www.youtube.com/watch?v=6ZfuNTqbHE8


class Disagen extends Component {

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  
  render() {
    
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const {videoId} = this.props
    return ( 
    <div>
    <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />
    </div>

    )
  }
 
  
}





export default Disagen;