import React, { useState } from "react";
 
function Counter() {
  const [count, setCount] = useState(0);
 
  return (
    <div className="Counter">
      <h2>Contador</h2>
 
      <p>Hiciste clic {count} veces</p>
 
      <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button> 
 
    </div>
  );
}
 
export default Counter;