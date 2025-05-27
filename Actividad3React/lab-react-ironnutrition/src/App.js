import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState, useEffect  } from 'react';
import React from 'react';
import { Card, Col, Button, Input } from 'antd';
import imagen from './imagen.png';


function App() {
  const [products, setProducto] = useState(foods)
  const [filterText, setFilterText] = useState('');
  const [cambio, setCambio] = useState(true)
  const handleDelete = (nameToDelete) => {

    const filtered = products.filter(product => product.name !== nameToDelete);
   
   // *** CORRECCIÓN CLAVE 1: Comprobar la longitud del array ***
    if (filtered.length === 0) {
      setCambio(false); // No quedan productos, entonces cambio es false
    } else {
      setCambio(true); // Todavía quedan productos, entonces cambio es true
    }
    console.log(filtered);
    setProducto(filtered);

  };

  return (
    <>
      <div className="App">
        <h1>Food list</h1>
        <SearchBar filterText={filterText}
          onFilterTextChange={setFilterText}
        />
        <div className='container'>
          <Producto Articulo={products} setProducto={setProducto} filterText={filterText} onDelete={handleDelete} propiedad={cambio} />
        </div>

        <AddFoodForm menu={products} setProducto={setProducto} />
      </div>
    </>
  );
}


function Producto({ Articulo, filterText, onDelete, propiedad }) {

  const [estaVisible, setEstaVisible] = useState(propiedad);

useEffect(() => {
    // Cuando la prop 'propiedad' cambie, actualiza el estado 'estaVisible'
    setEstaVisible(propiedad);
  }, [propiedad]);

  const filterProducto = Articulo.filter(product => {
    const matchesName = product.name.toLowerCase().startsWith(filterText.toLowerCase());
    return matchesName;




  });

  return (
    <>

      {filterProducto.map((product) => (
        <>

          <FoodBox carta={product} key={product.name} onDelete={onDelete} />
          

        </>
      ))}
      <img className='Error' src={imagen} height={250} width={400} style={{ visibility: estaVisible ? 'hidden' : 'visible' }} />
    </>
  );

}



function SearchBar({ filterText, onFilterTextChange }) {


  return (
    <>
      <div>
        <p>Search</p>
        <input type='text'
          size={100}
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        ></input>

      </div><br></br>
    </>
  )
}



// Iteration 2
function FoodBox({ carta, onDelete }) {
  return (
    <Col>
      <Card
        title={carta.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={carta.image} height={60} alt="food" />
        <p>Calories: {carta.calories}</p>
        <p>Servings: {carta.servings}</p>

        <p>
          <b>Total Calories: {carta.calories * carta.servings}  kcal </b>
        </p>
        <Button onClick={() => onDelete(carta.name)} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}



function AddFoodForm({ menu, setProducto }) {
  const [estaVisible, setEstaVisible] = useState(true);

  const [newFood, setNewFood] = useState({ name: '', calories: 0, image: '', servings: 0 })

  const handleSubmit = (e) => {

    e.preventDefault();
    if (!newFood.name || !newFood.calories || !newFood.image || !newFood.servings) {
      return alert('No has completado todos los campos')
    }
    setProducto([...menu, newFood]);
    setNewFood({ name: '', calories: 0, image: '', servings: 0 })
  }

  const ocultarDiv = () => {
    setEstaVisible(false);
  }
  const MostrarDiv = () => {
    setEstaVisible(true);
  }

  return (
    <>
      <br></br><hr></hr><div className='formularioA' style={{ visibility: estaVisible ? 'visible' : 'hidden' }}>
        <button onClick={ocultarDiv}>Ocultar Formulario</button>
        <form className='formulario' onSubmit={handleSubmit}>
          <h2>Añade comida</h2>
          Nombre<Input value={newFood.name} placeholder='Nombre' type='text' onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}>
          </Input>
          Calorias<Input value={newFood.calories} placeholder='Calorias' type='number' onChange={(e) => setNewFood({ ...newFood, calories: e.target.value })}>
          </Input>
          Porciones<Input value={newFood.image} placeholder='https://' type='text' onChange={(e) => setNewFood({ ...newFood, image: e.target.value })}>
          </Input>
          Enlace<Input value={newFood.servings} type='number' onChange={(e) => setNewFood({ ...newFood, servings: e.target.value })}>
          </Input>



          <button type='submit'>Añadir Comida</button>
          {/* https://i.imgur.com/Xk5bDkT.jpeg -- Imagen de comida */}
        </form>
      </div>
      <button onClick={MostrarDiv} style={{ visibility: estaVisible ? 'hidden' : 'visible' }}>Mostrar Formulario</button>

    </>
  );
}


export default App;
