import React, { useState, useEffect } from "react";
 
function TimerThree() {
  const [count, setCount] = useState(0);
 
  
  useEffect(() => {
    console.log("useEffect - Montaje (renderizado inicial)");
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
 
    // Retornar una "función de limpieza" que se ejecutará automáticamente
    // antes de que el componente sea removido del DOM
    return () => {                                               // <== AÑADIR
      console.log("Limpieza - Desmontaje del Componente");
      clearInterval(id);
    };
  }, []);
  
 
  return (
    <div className="Timer">
      <h2>Temporizador Tres</h2>
 
      <h3>{count}</h3>
    </div>
  );
}
 
export default TimerThree;