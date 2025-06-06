import { useState } from 'react';
 
function AddMovie(props) {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);


 const handleTitleInput = e => setTitle(e.target.value);
 
  const handleDirectorInput = e => setDirector(e.target.value);
 
  const handleRatingInput = e => setIMDBRating(e.target.value);
 
  const handleOscarsInput = e => setHasOscars(e.target.checked);
  // e.target.checked es un valor booleano de la entrada `checkbox`

  const handleSubmit = (e) => {        // <==  AÑADIR
    e.preventDefault();
    const newMovie = { title, director, IMDBRating, hasOscars };
 
    console.log("Enviado: ", newMovie);
    props.addMovie(newMovie);  
  }
 
  return (
    <div className="MovieCardF">
      <h4 style={{textAlign: 'center'}}>Añadir una Película</h4>
  
      <form className='form-container' onSubmit={handleSubmit}>
        <label>Título: </label>
        <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={handleTitleInput}  
        />
        
  
        <label>Director: </label>
        <input 
            type="text" 
            name="director" 
            value={director} 
            onChange={handleDirectorInput} 
        />
  
        <label>Calificación IMDB: </label>
        <input 
            type="number" 
            name="IMDBRating" 
            value={IMDBRating} 
            nChange={handleRatingInput} 
        />
  
        <label>Ganó Óscares: </label>
        <input 
            type="checkbox" 
            name="hasOscars" 
            checked={hasOscars} 
            onChange={handleOscarsInput} 
        />
        
        <button type="submit">Añadir una Película</button>
      </form>
    </div>
  );
}
 
export default AddMovie;