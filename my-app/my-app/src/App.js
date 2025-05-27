// src/App.js
import './App.css';


// En tu componente
import { logo1, logo2, icon1, icon2, icon3, icon4 } from '../src/images/';


function App() {
  return (
    <>
      <div className="App">
        <div className='App-header'>
          <img src={logo1} className='logo' />
          <img src={logo2} className='menu' />
        </div>
        <div className='cuerpoPrincipal'>
          <div className='cuerpoL'>
            <h1>Say hello to ReactJS</h1>
            <p className='Subtitulo'>
              You will learn how to use<br></br> the most popular fronted library,<br></br> and become a Super Ninja developer.
            </p>
            <br></br>
            <button className='boton'>Awesome!</button>
          </div>

        

        </div>
        <div className='footer'>
            <table>
              <tr>
                <th>
                  <div className='Contenedor'>
                    <img src={icon1} className='' />
                    <h2>Declarative</h2>
                    <p className='ptexto'>
                      REact makes it painless to create interactive Uls.
                    </p>
                  </div>
                </th>
                <th>
                  <div className='Contenedor'>
                    <img src={icon2} className='' />
                    <h2>Components</h2>
                    <p className='ptexto'> 
                      Build encapsulated components that manage their state.
                    </p>
                  </div>
                </th>
                <th>
                  <div className='Contenedor'>
                    <img src={icon3} className='' />
                    <h2>Single-Way</h2>
                    <p className='ptexto'>
                      A set of immutable values are passed to the component's.
                    </p>
                  </div>
                </th>
                <th>
                  <div className='Contenedor'>
                    <img src={icon4} className='' />
                    <h2>JSX</h2>
                    <p className='ptexto'>
                      Statically-typed, designed to run on modern browsers.
                    </p>
                  </div>
                </th>
              </tr>
            </table>
        </div>
      </div>

    </>
  );
}
export default App;