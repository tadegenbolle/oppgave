import { getMovies } from "../lib/services/MovieService";
import Movie from "./Movie";
import Link from "react-dom";
import { useState } from "react";

const [state, setState] = useState([])


export default function Movies() {
    const getSanityData = () => {
      getMovies();
      
    };


    return (
      <>
        <button type="button" onClick={getSanityData}>
          Trykk for film! :)
        </button>

      </>
    );
  }