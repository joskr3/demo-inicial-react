// escribo r + f  + c + e => rfce + enter para crear el componente

import { useState } from "react";

import "./App.css";
import MiFooter from "./components/mi-footer";
import MiHeader from "./components/mi-header";

// jsx es una extension de javascript que permite escribir html en javascript
function App() {
  const [nombre, setNombre] = useState("");

  function manejarCambio(event:React.ChangeEvent<HTMLInputElement>) {
    setNombre(event.target.value);
  }

  return (
    <>
      <MiHeader />
      <main>
        <h1>Hola,{nombre} !!!</h1>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={manejarCambio}
        />
        {/* <input
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(evento) => {
            setNombre(evento.target.value);
            console.log(evento);
            let miNuevoNombre = "Nuevo nombre"
          }}
        /> */}
      </main>
      <MiFooter />
    </>
  );
}

export default App;
