import React, { Component } from 'react';
import Form from './Component/Form';
import Movie from './Component/Movie'
import Disagen from './Component/Disagen';
import VideoSlider from './Component/VideoSlider';
import Header from './Component/Header';
import Logo_Header from './Component/Logo_Header';
import OurTeam from './Component/OurTeam';
import Jquery from './Component/Jquery';
import Margin from './Component/Margin';
import Video_Header from './Component/Video_Header';
import Photoslider1 from './Component/Photoslider1';
import {BrowserRouter , Route, Link} from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Coment from './Component/Coment';
import Photoslider2 from './Component/Photoslider2';
import Footer from './Component/Footer';
import OurService from './Component/OurService';
import ContactBag from './Component/ContactBag';
import AboutUs from './Component/AboutUs';

//https://api.themoviedb.org/3/movie/550?api_key=ca4470d2849351d7450ee6ae2bbd8a22
//http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
//https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${moveis}`

//<Disagen videoId='6ZfuNTqbHE8' />


const API_KEY ="9c93329242760cef4d70cf316f99d9b2";
const img_movies ="http://image.tmdb.org/t/p/w500//AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg";
class App extends Component {

  state = {
    poster_path:'',
    overview:'',
    release_date:'',
    runtime:'',
    vote_average:'',
    moveis:'',
    error:'',
      
  }

  getMovie= async (e) =>{
    e.preventDefault()
    const moveis =e.target.elements.moveis.value;
    const api = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9c93329242760cef4d70cf316f99d9b2&query=${moveis}`);
    const data = await api.json();
    console.log(data);
    if (moveis  ){
      this.setState({
        poster_path:data.results[0].poster_path,
        overview:data.results[0].overview,
        release_date:data.results[0].release_date,
        runtime:data.results[0].id,
        vote_average:data.results[0].vote_average,
        moveis:data.results[0].original_title,
      })
    }  else {
      this.setState({
        poster_path:'',
        overview:'',
        release_date:'',
        runtime:'',
        vote_average:'',
        moveis:'',
        error:'pls enter data',
      })
    }


  }
  
  

  render(){

    return(
      
      <BrowserRouter>
      
      <div className="App">
       <Logo_Header/>  
       <Route  exact path="/" component={Home} />
       <Route  exact path="/OurService" component={OurService} />
       <Route  exact path="/ContactBag" component={ContactBag} />
       <Route  exact path="/AboutUs" component={AboutUs} />
        
    </div>   
    </BrowserRouter>  
    
    );
  }
}

export default App;