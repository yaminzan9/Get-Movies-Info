import React, { Component } from 'react';
import Jquery from './Jquery';
import Margin from './Margin';
import Footer from './Footer';
import OurTeam from './OurTeam';

class AboutUs extends Component {

    
    render() {
      return (
            <div>
               <Margin/>
               <OurTeam/>
               <Margin/>
               <Jquery/>
               <Margin/>
               <Footer/>
            </div>
      );
    }
  }


export default AboutUs;