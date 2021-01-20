import React, { Component } from 'react';
import Movie from './Movie';
import Form from './Form';
import Video_Header from './Video_Header';
import Margin from './Margin';
import Photoslider1 from './Photoslider1';
import Photoslider2 from './Photoslider2';
import Footer from './Footer';

const API_KEY ="9c93329242760cef4d70cf316f99d9b2";
const img_movies ="http://image.tmdb.org/t/p/w500//AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg";
class Home extends Component {

    
    render() {
      return (
            <div>
                <Video_Header/>
                <Margin/>
                <Photoslider2/>
                <Margin/>
                <Photoslider1/>
                <Margin/>
                <Footer/>
                
            </div>
      );
    }
  }


export default Home;