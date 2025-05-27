import { useState } from 'react';
import Data from '../Actores.json';
import AddMovie from './AddMovie';
import FilterMovies from './FilterMovies';
import MovieCard from './MovieCard';

function MovieList() {
  const [movies, setMovies] = useState(Data);
  const [moviesData, setMoviesData] = useState(Data);


const addNewMovie = newMovie => {
  const updatedMoviesData = [...moviesData, newMovie];
  const updatedMovies = [...movies, newMovie];
 
  setMoviesData(updatedMoviesData);
  setMovies(updatedMovies);
};

  const deleteMovie = movieId => {
    const filteredMovies = movies.filter(movie => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };

const filterMovieList = str => {
  let filteredMovies;
  
  if (str === 'Todas') {
    filteredMovies = moviesData;
  } else {
    filteredMovies = moviesData.filter(movie => {
      return movie.title[0].toLowerCase() === str.toLowerCase();
    });
  }
 
  setMovies(filteredMovies);
};

  return (
    <div>
      <FilterMovies filterMovies={filterMovieList} /> 
       <AddMovie addMovie={addNewMovie} />
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} /* clickToDelete={deleteMovie} */ />;
      })}
    </div>
  );
}




 

export default MovieList;
