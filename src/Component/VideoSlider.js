import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { FaAmazonPay , FaFacebookSquare  } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";


class VideoSlider extends Component {
    

  vidoeOnReady(event) {
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
      const {videoId}=this.props
      return (
        <div className="container" >
          <div className="youtub-conteant container" >
          <div className="youtub-item row" >
          <div className="youtub-items col-lg-6 col-md-12 col-sm-12 col-xs-12" >
          <YouTube className="youtub-item-video" videoId={videoId}
          opts={opts} 
          onReady={this.videoOnReady} />
          </div>
          <div className="youtub-items col-lg-6 col-md-12 col-sm-12 col-xs-12" >
          <ul className="youtub-item-list" >
            <li ><a href="#" >watch a new video here </a><FiTwitter/></li>
            <li ><a href="#" >watch a new video here </a><AiOutlineYoutube/></li>
            <li ><a href="#" >watch a new video here </a><FcGoogle/></li>
            <li ><a href="#" >watch a new video here </a><FaFacebookSquare/></li>
            <li ><a href="#" >watch a new video here </a><FaAmazonPay/></li>
          </ul>
          </div>
         
          </div>
      </div>
      </div>

      )
    }
   
    
    
  }

  export default VideoSlider;