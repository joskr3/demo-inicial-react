import { useState } from "react";
import MiFooter from "./mi-footer";
import MiHeader from "./mi-header";
import MiInputs from "./mi-input";

const Saludo = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [equipoFavorito, setEquipoFavorito] = useState("");

  function mostrarSaludo() {
    return (
      <>
        {
          <p>
            Hola,${nombre} !!!, tengo ${edad} , mi equipo favorito es: // $
            {equipoFavorito}
          </p>
        }
      </>
    );
  }

  function manejarCambioNombre(event: React.ChangeEvent<HTMLInputElement>) {
    setNombre(event.target.value);
  }
  function manejarCambioEdad(event: React.ChangeEvent<HTMLInputElement>) {
    setEdad(parseInt(event.target.value));
  }
  function manejarCambioEquipoFavorito(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setEquipoFavorito(event.target.value);
  }
  return (
    <>
      <MiHeader />
      <MiInputs
        nombre={nombre}
        edad={edad}
        equipoFavorito={equipoFavorito}
        cambiarEquipoFavorito={() => manejarCambioEquipoFavorito}
        cambiarNombre={() => manejarCambioNombre}
        cambiareEdad={() => manejarCambioEdad}
        mostrarSaludo={mostrarSaludo()}
      />
      <MiFooter />
    </>
  );
};

export default Saludo;
