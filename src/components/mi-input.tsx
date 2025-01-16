import React from "react";

interface IMiInputProps {
  nombre: string;
  edad: number;
  equipoFavorito: string;
  mostrarSaludo: React.JSX.Element;
  cambiarNombre?: React.Dispatch<React.SetStateAction<string>>;
  cambiareEdad?: React.Dispatch<React.SetStateAction<number>>;
  cambiarEquipoFavorito?: React.Dispatch<React.SetStateAction<string>>;
}

function MisInputs(props: IMiInputProps) {

  const {
    nombre,
    edad,
    equipoFavorito,
    cambiarNombre,
    cambiareEdad,
    cambiarEquipoFavorito,
    mostrarSaludo,
  } = props;
  
  return (
    <main>
      {mostrarSaludo}
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={() => cambiarNombre}
      />
      <input
        type="number"
        placeholder="Escribe tu edad"
        value={edad}
        onChange={() => cambiareEdad}
      />
      <input
        type="text"
        placeholder="Escribe tu equipo favorito"
        value={equipoFavorito}
        onChange={() => cambiarEquipoFavorito}
      />
    </main>
  );
}

export default MisInputs;
