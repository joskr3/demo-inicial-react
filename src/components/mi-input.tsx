import React, { useState } from "react";

function MiInput() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [equipoFavorito, setEquipoFavorito] = useState("");

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
    <main>
      <h1>
        Hola,{nombre} !!!, tengo {edad} , mi equipo favorito es:{" "}
        {equipoFavorito}
      </h1>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={manejarCambioNombre}
      />
      <input
        type="number"
        placeholder="Escribe tu edad"
        value={edad}
        onChange={manejarCambioEdad}
      />
      <input
        type="text"
        placeholder="Escribe tu equipo favorito"
        value={equipoFavorito}
        onChange={manejarCambioEquipoFavorito}
      />
    </main>
  );
}

export default MiInput;
