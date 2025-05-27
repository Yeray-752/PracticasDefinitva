import { useState } from 'react';
import moviesData from '../Actores.json';
import MovieCard from './MovieCard';
import ImprovedMovieCard from './InmprovedMovieCard';


function ImprovedMovieList() {
    const [movies, setMovies] = useState(moviesData);
    // Declare a new state variable, which we'll call "showMovies"
    const [showMovies, setShowMovies] = useState(true);

    const deleteMovie = movieId => {
        const filteredMovies = movies.filter(movie => {
            return movie._id !== movieId;
        });

        setMovies(filteredMovies);
    };

    const toggleShowMovies = () => {
        setShowMovies(!showMovies);
    };

    return (
        <div>
            <h2>Improved Movie List</h2>

            <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button>

            {showMovies &&
                movies.map(movie => {
                    return <ImprovedMovieCard
                        key={movie._id}
                        movie={movie}
                        clickToDelete={deleteMovie} />;
                })}
        </div>
    );
}



export default ImprovedMovieList;
