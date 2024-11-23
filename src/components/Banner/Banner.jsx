import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_Key, imageurl } from '../../constants/constants';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData(){
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_Key}&language=en-US`)
    const movies = response.data.results
    const randomIndex = Math.floor(Math.random() * movies.length);
    setMovie(movies[randomIndex]);
    }
    fetchData();
  
  },[])
  return (
    <div 
      className='banner'
      style={{ backgroundImage: `url(${movie ? imageurl + movie.backdrop_path : ""})` }}
    >
      <div className='content'>
        <h1 className='title'>{movie ? movie.title:""}</h1>
        <div className='banner-button'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;

