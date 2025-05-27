import React, { useState, useEffect } from "react";       // <== IMPORTAR
 
function TimerTwo() {
  const [count, setCount] = useState(0);
 
  // Añadir el efecto en el cuerpo de la función
  useEffect(() => {
    console.log("useEffect - Montaje (renderizado inicial)");
    
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    
  }, [] );  // <--  [] significa: Ejecutar el efecto solo una vez, después del renderizado inicial
 
  return (
    <div className="Timer">
      <h2>Temporizador Dos</h2>
 
      <h3>{count}</h3>
    </div>
  );
}
 
export default TimerTwo;