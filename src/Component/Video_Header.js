import React from 'react';
import VideoPlayer from "react-video-js-player";
import Badboy from './video/Badboy.mp4'
import { FaGooglePlay } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import Ilogo from "../imegs/logo/Netflix_N_logo.png";
const Video_Header = () => {

    const videoSrc= Badboy;
    return (
        
        <div className="container-floued" >
            <div className="autplayvideo-content" >
            <video autoPlay loop muted >
                <source src={Badboy} type="video/mp4" /> 
            </video>
            <div className="autplayvideo-layer container-floued" >
            
               <div className="layer-item1" >
               <button className="btn btn-info" >see more <i><FiPlus/></i></button>
               </div>
               
               <div className="layer-item2" >
               <img src={Ilogo} />
               </div>
    
               <div className="layer-item3" >
               <h2>video name</h2>
               <p>play video play video play </p>
               <p>play video play video </p>
               <button className="btn btn-info"  >play video<i> <FaGooglePlay/></i></button>
               <button className="btn btn-info"  >more info<i> <BsInfoCircleFill/></i></button>
               </div>
               
            </div>
            </div>
            </div>
            
        
        
        
    );
};





export default Video_Header;