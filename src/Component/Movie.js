import React, { Fragment } from 'react';

const img_body ="http://image.tmdb.org/t/p/w500/";


const Movie = (props) => {

    const img_movies = (`http://image.tmdb.org/t/p/w500/${props.poster_path}`);
    
        return (
            <Fragment>
            <div>
                <div className="container-fluid" >
                
                <div className="movie-show-data" >
                    <div className="movie-content" >
                       
                        <div className="movie-items container" >
                        <div className="row" >
                        
                        <div className="movie-item col-lg-6 col-md-12 col-sm-12 col-xs-12" >
                        {
                        props.poster_path && <div className="container" ><img src={img_movies} /></div>
                        }
                        </div>
                        <div className="movie-item col-lg-6 col-md-12 col-sm-12 col-xs-12" >
                        <ol>
                    
                        <li>
                        {
                            props.overview && <p>overview:  {props.overview}</p>
                        }
                        </li>
                        <li>
                        {
                            props.release_date && <p>release_date: {props.release_date}</p>
                        }
                        </li>
                        <li>
                        {
                            props.runtime && <p>runtime: {props.runtime}</p>
                        }
                        </li>
                        <li>
                        {
                            props.vote_average && <p>vote_average: {props.vote_average}</p>
                        }
                        </li>
                        <li>
                        {
                            props.moveis && <p>moveis: {props.moveis}</p>
                        }
                        </li>
                        <li>
                        {
                            props.error && <p>error: {props.error}</p>
                        }
                        </li>
                        </ol>
                        </div></div></div>
                        </div>
                    </div>
                    </div>
            </div>
            </Fragment>
        )
}

export default Movie; 