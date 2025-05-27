import { useState, useEffect } from "react";     // <== IMPORTAR useEffect
import axios from "axios";                       // <== IMPORTAR axios

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {                                        // <== AÑADIR EL EFECTO
    axios
      .get("https://ironbnb-m3.herokuapp.com/apartments")
      .then((response) => {
        console.log('response.data', response.data);
        setApartments(response.data)
      });
    
  }, [] );       // <--  [] significa: Ejecutar el efecto solo una vez, después del renderizado inicial

  
  return (
    <div>
      <h3>Lista de apartamentos</h3>

      {/*    AÑADIR   */}
      {apartments.map((apartment) => (
        <div key={apartment._id} className="card">
          <img src={apartment.img} alt="apartamento" />
          <h3>{apartment.title}</h3>
          <p>Precio: {apartment.pricePerDay}</p>
        </div>
      ))}
      
    </div>
  );
}

export default ApartmentsPage;