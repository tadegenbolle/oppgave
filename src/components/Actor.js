import { useState } from 'react'
import { useEffect } from'react';
import { getActors } from '../lib/services/MovieService';

export default function Movie({fullname, name}) {
 

 
  const [actor, setActor] = useState([])

  const listActors = async () => {
    const actors = await getActors()
    setActor(actors)
    console.log(actors)
    
  }
useEffect(() => {
  listActors()
},[])
    return  <ul>
  
  
  <h2>Actors</h2>
      {actor.map((actors) => (
        <h1 key={actors.name}>name: {actors.name}, Actor: {actors.fullname}
         </h1>
      ))
      }

  

    </ul>
  }