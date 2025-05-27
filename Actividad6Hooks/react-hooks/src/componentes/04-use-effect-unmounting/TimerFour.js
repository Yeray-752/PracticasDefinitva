import React, { useState, useEffect } from "react";

function TimerFour() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    console.log("useEffect - Montaje (renderizado inicial)");
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
 
    return () => {
      clearInterval(id);
      console.log("Desmontaje del Componente");
    };
  }, []);
  
 
  // Añadir un nuevo efecto que se ejecutará solo
  // cuando el valor `count` se actualice
  useEffect(() => {                              // <== AÑADIR
    console.log("useEffect - en actualización");
    document.title = count;
  }, [count] );     
  
  // [count] significa: este efecto depende del valor `count`,
  // por lo tanto re-ejecuta el efecto cada vez que `count` se actualiza.
  
 
  return (
    <div className="Timer">
      <h2>Temporizador Cuatro</h2>
      <h3>{count}</h3>
    </div>
  );
}
 
export default TimerFour;