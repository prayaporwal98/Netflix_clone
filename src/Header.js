import React from 'react';
import './Header.css';
import Row from './Row';
import request from './request';


function Header(img){
    //console.log(img);
return(
	<>
  <div class="header"><img  src= 'https://image.tmdb.org/t/p/w1280/3RMbkXS4ocMmoJyAD3ZsWbm32Kx.jpg' alt="img" /> 
    <div className="movie-infoo">
				        <h3>Awake</h3>
			            </div>
			             <div className="overvieww">
				        <h3>Overview</h3>
                After a sudden global event wipes out all electronics and takes away humankind’s ability to sleep, chaos quickly begins to consume the world. Only Jill, an ex-soldier with a troubled past, may hold the key to a cure in the form of her own daughter. The question is, can Jill safely deliver her daughter and save the world before she herself loses her mind.
			            </div>
   </div>
   <Row title="NETFLIX THEATRES" fetchUrl={request.theatres}/>
   <Row title=" MOST POPULAR MOVIES" fetchUrl={request.popular} /> 
   <Row title="HIGHEST RATED MOVIES" fetchUrl={request. highest_rated}/>
   <Row title=" MOST POPULAR KIDS MOVIES" fetchUrl={request.most_popular_kids} /> 
   <Row title="BEST DRAMA's" fetchUrl={request. best_drama}/>
   <Row title=" ALL TIME FAVORITE" fetchUrl={request.comedies} /> 
   <Row title="BEST MOVIES FROM 2010" fetchUrl={request.best_movies}/>
     
   </>
);}


export default Header;
