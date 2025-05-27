import "./App.css";
import { useState } from "react";
import Counter from "./componentes/01-use-state/Counter.js";
import Timer from "./componentes/02-use-state-loop/Timer.js"; 
import TimerTwo from "./componentes/03-use-effect-mounting/TimerTwo.js"; 
import TimerThree from "./componentes/04-use-effect-unmounting/TimerThree.js"; 
import TimerFour from "./componentes/04-use-effect-unmounting/TimerFour.js"; 
import IronbnbList from './componentes/04-use-effect-unmounting/IronbnbList.js';   

function App() {
  const [show, setShow] = useState(true);
 
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Ocultar" : "Mostrar"}
      </button>
      {/* {show && <Counter />} */}

      {/* {show && <Timer />}  */} 
      {/* {show && <TimerTwo />}   */}

      {/*  { show && <TimerThree /> }  */}

     {/*  { show && <TimerFour /> } */}

     {show && <IronbnbList />} 
    </div>
  );
}
 
export default App;