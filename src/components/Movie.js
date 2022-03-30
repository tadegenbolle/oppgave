import { useState } from 'react'
import { useEffect } from'react';
import { getMovies  } from '../lib/services/MovieService';

export default function Movie({title, actor}) {
 

  const [movie, setMovie] = useState([])

 
 
  const listMovies = async () => {
    const movies = await getMovies()
    setMovie(movies)
    console.log(movies)
    
  }

  useEffect(() => {
    
    listMovies()
    
  },[])
    
    return  <ul>
  
  
  <h2>movies</h2>
      {movie.map((movies) => (
        <h1 key={movies.title}>Title: {movies.title}, Actor: {movies.actor}
         </h1>
      ))
      }

  

    </ul>
  }

  