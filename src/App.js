import './App.css';
import { Routes, Route} from 'react-router-dom';
import ShowMovies from './pages/ShowMovies';
import ShowActors from './pages/ShowActors';


export default function App() {
  return (
    <Routes>
      <Route>
      <Route path="/movies">
      <Route index element={<ShowMovies/>} />
      
    </Route>

      <Route path="/actors">
      <Route index element={<ShowActors/>} />
      <Route path=":name" element={<ShowActors/>} />
    </Route>
    </Route>

    </Routes>
  );
}
//legg knapp inn i Moive.js og import på toppen og call det i return.
