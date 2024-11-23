import React, { useEffect, useState } from 'react';
import './Rowpost.css';
import axios from '../../axios';
import { imageurl, API_Key } from '../../constants/constants';
import YouTube from 'react-youtube';

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  const [UrlId, setUrlID] = useState('');

  useEffect(() => {
    axios.get(props.urls).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    }).catch(err => {
      alert("response error");
    });
  }, [props.urls]);

  const handleMovieTrailer = (id) => {
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_Key}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlID(response.data.results[0]);
      } else {
        console.log('trailer not available');
      }
    }).catch(err => {
      alert("Trailer not found");
    });
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj) => (
          <div key={obj.id}>
            <img onClick={() => handleMovieTrailer(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageurl + obj.backdrop_path}`} alt={obj.title || obj.name}/>
            <p className='poster-title'>{obj.title || obj.name}</p>
          </div>
        ))}
      </div>
      <div>
        {UrlId && <YouTube videoId={UrlId.key} opts={opts} />}
      </div>
    </div>
  );
}

export default Rowpost;
