import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOpenWith } from "react-icons/md";
import Iimeag1 from "../imegs/team/1_Y-yWsCHUc_8Xwti2k9sW2Q.jpg";
import Iimeag2 from "../imegs/team/7m7wa213ccc41.jpg";
import Iimeag3 from "../imegs/team/extraction-netflix-chris-hemsworth-poster-full.jpg";
import Iimeag4 from "../imegs/team/71hL9hv3RPL._AC_SL1405_.jpg";
import Iimeag5 from "../imegs/team/488c9dea43b1f7f0a07652028deb9dff.jpg";
import Iimeag6 from "../imegs/team/Beauty-Beast-2017-Movie-Posters.jpg";
import Iimeag7 from "../imegs/team/black-panther-web.jpg";
import Iimeag8 from "../imegs/team/download (1).jpg";
import Iimeag9 from "../imegs/team/download (2).jpg";
import Iimeag10 from "../imegs/team/spider-man-homecoming-movie-poster-marvel-cinematic-universe-1038913.jpg";
import Iimeag11 from "../imegs/team/star-wars-the-last-jedi-movie-poster.jpg";
import Iimeag12 from "../imegs/team/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg";
class Photoslider1 extends Component {

   
    render() {
      var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
  
      return (
          
       
        <Slider {...settings}>
          
          <div  className="slider-content"   >
          <img src={Iimeag1} />
          <div className="photo-layer" >
          <p>watch the movie</p>
          <p></p>
          <p><i><MdOpenWith className="thedark" /></i>
          </p> 
          </div>
          </div>
          <div  className="slider-content"   >
          <img src={Iimeag2} />
          <div className="photo-layer" >
          <p>watch the movie</p>
          <p></p>
          <p><i><MdOpenWith className="thedark" /></i>
          </p> 
          </div>
          </div>
          <div  className="slider-content"   >
          <img src={Iimeag3} />
          <div className="photo-layer" >
          <p>watch the movie</p>
          <p></p>
          <p><i><MdOpenWith className="thedark" /></i>
          </p> 
          </div>
          </div>
          <div  className="slider-content"   >
          <img src={Iimeag4} />
          <div className="photo-layer" >
          <p>watch the movie</p>
          <p></p>
          <p><i><MdOpenWith className="thedark" /></i>
          </p> 
          </div>
          </div>
          <div  className="slider-content"   >
          <img src={Iimeag5} />
          <div className="photo-layer" >
          <p>watch the movie</p>
          <p></p>
          <p><i><MdOpenWith className="thedark" /></i>
          </p> 
          </div>
          </div>
          <div  className="slider-content"   >
          <img src={Iimeag6} />
          <div className="photo-layer" >
          <p>watch the movie</p>
          <p></p>
          <p><i><MdOpenWith className="thedark" /></i>
          </p> 
          </div>
          </div>
          <div  className="slider-content"   >
          <img src={Iimeag7} />
          <div className="photo-layer" >
          <p>watch the movie</p>
          <p></p>
          <p><i><MdOpenWith className="thedark" /></i>
          </p> 
          </div>
          </div>
          <div  className="slider-content"   >
          <img src={Iimeag8} />
          <div className="photo-layer" >
          <p>watch the movie</p>
          <p></p>
          <p><i><MdOpenWith className="thedark" /></i>
          </p> 
          </div>
          </div>
          <div  className="slider-content"   >
          <img src={Iimeag9} />
          <div className="photo-layer" >
          <p>watch the movie</p>
          <p></p>
          <p><i><MdOpenWith className="thedark" /></i>
          </p> 
          </div>
          </div>
          <div  className="slider-content"   >
          <img src={Iimeag10} />
          <div className="photo-layer" >
          <p>watch the movie</p>
          <p></p>
          <p><i><MdOpenWith className="thedark" /></i>
          </p> 
          </div>
          </div>
          <div  className="slider-content"   >
          <img src={Iimeag11} />
          <div className="photo-layer" >
          <p>watch the movie</p>
          <p></p>
          <p><i><MdOpenWith className="thedark" /></i>
          </p> 
          </div>
          </div>
          <div  className="slider-content"   >
          <img src={Iimeag12} />
          <div className="photo-layer" >
          <p>watch the movie</p>
          <p></p>
          <p><i><MdOpenWith className="thedark" /></i>
          </p> 
          </div>
          </div>
          
        </Slider>
       
      );
    }
  }


export default Photoslider1;