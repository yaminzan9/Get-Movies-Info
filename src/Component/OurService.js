import React, { Component } from 'react';
import Movie from './Movie';
import Form from './Form';
import Footer from './Footer';
import VideoSlider from './VideoSlider';

class OurService extends Component  {

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
   
   
        render () {
        return (
           <div>
                <Form getMovie={this.getMovie}/>
                <Movie poster_path={this.state.poster_path}
                overview={this.state.overview}
                release_date={this.state.release_date}
                runtime={this.state.runtime}
                vote_average={this.state.vote_average}
                moveis={this.state.moveis}
                error={this.state.error}
                />
                <VideoSlider videoId='8ugaeA-nMTc'  />
               <Footer/>
           </div>
            
        )
    }
}

export default OurService ;