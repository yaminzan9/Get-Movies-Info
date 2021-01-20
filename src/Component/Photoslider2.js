import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOpenWith } from "react-icons/md";
import Iimages from "../imegs/logo/images.png";
import Iimages1 from "../imegs/background/super (11).jpg";
import Iimages2 from "../imegs/background/super (10).jpg";
import Iimages3 from "../imegs/background/super (8).jpg";
import Iimages4 from "../imegs/background/super (7).jpg";
import Iimages5 from "../imegs/background/super (6).jpg";
import Iimages6 from "../imegs/background/photo.jpg";

class Photoslider2 extends Component {

   
    render() {
      var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:2000,
        speed: 700,
        fade: true,
        cssEase: 'linear'
      };
  
      return (
          <div>
        <div className="part-head" ><img src={Iimages} /><h2>top 10</h2><h3>box office</h3></div>
        <Slider {...settings}>
            
          
          <div  className="slider-content2 container-floued"   >
          <img src={Iimages1} />
          <div className="slider2-item" >
          <div className="photo-layer" >  
          </div>
          </div>
          </div>
          <div  className="slider-content2 container-floued"   >
          <img src={Iimages2} />
          <div className="slider2-item" >
          <div className="photo-layer" > 
          </div>
          </div>
          </div><div  className="slider-content2 container-floued"   >
          <img src={Iimages3} />
          <div className="slider2-item" >
          <div className="photo-layer" > 
          </div>
          </div>
          </div><div  className="slider-content2 container-floued"   >
          <img src={Iimages4} />
          <div className="slider2-item" >
          <div className="photo-layer" > 
          </div>
          </div>
          </div><div  className="slider-content2 container-floued"   >
          <img src={Iimages5} />
          <div className="slider2-item" >
          <div className="photo-layer" > 
          </div>
          </div>
          </div><div  className="slider-content2 container-floued"   >
          <img src={Iimages6} />
          <div className="slider2-item" >
          <div className="photo-layer" > 
          </div>
          </div>
          </div>
         
          
          
        </Slider>
        </div>
      );
    }
  }


export default Photoslider2;