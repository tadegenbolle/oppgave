import client from "../Client";

const movieFields = `

  title,
  actor,
  
`;

const actorFields = `

  "fullname": fullname.current,
  "name": slug.current,
  
`;

export async function getMovies() {
  
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
  console.log(data)
  return data
}

export async function getActors() {
  
  const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`);
 
  console.log(data)
}
