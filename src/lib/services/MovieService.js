import client from '../Client';
const movieFields = `

  title,
  "actor": actor->name.current,
  
`;



export async function getMovies() {
  
  let data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
  
  return data;
  
  
}



const actorFields = `

  fullname,
  "name": name->name.current,
  
`;

export async function getActors() {
  
  let data = await client.fetch(`*[_type == "actor"]{${actorFields}}`);
  
  return data;
  
  
}