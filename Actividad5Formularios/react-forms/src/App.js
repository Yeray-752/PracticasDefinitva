import Spinner from './components/Spinner'; // <-- añadimos
import { useState } from 'react'; // <-- añadimos
import ImprovedMovieList from './components/ImprovedMovieList';
import './App.css';
import MovieList from './components/MovieList';

function App() {
    const [isLoading, setIsLoading] = useState(false); // <-- añadimos

  if (isLoading) {
    return <Spinner />
  } 
  else {
    return (
      <div className="App">
        <MovieList />
        {/* <ImprovedMovieList /> */}
      </div>
    );
  } 
}

export default App;
