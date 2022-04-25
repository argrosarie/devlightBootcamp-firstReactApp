import React, { useState } from 'react';
//estoy usando un componente de función y en este caso es una arrow function
const EjemploUseState = () => {
//acá declaro mi variable de estado y la voy a llamar contador y inicializo en 0
  const [contador, setContador] = useState(0);

  return (
    <div>
        {/* este botón a través del onClick va a modificar mi setContador */}
      <button onClick={() => setContador(contador + 1)}>
        ¡Hazme click!
      </button>
      {/* acá va a mostrarse cuantas veces se modificó */}
      <p>Hiciste click {contador} veces</p>
    </div>
  );
}
export default EjemploUseState;