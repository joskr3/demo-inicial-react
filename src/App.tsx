// escribo r + f  + c + e => rfce + enter para crear el componente

import './App.css'
import MiHeader from './components/mi-header';

// jsx es una extension de javascript que permite escribir html en javascript
function App() {
  return (
    <>
      <MiHeader/>
      <p>Hola mundo!! </p>
      <h1>Hola soy un titulo</h1>
      <footer>
        <nav>
          <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
          </ul>
          <ul>
            <li>Contacto 1</li>
            <li>Contacto 2</li>
            <li>Contacto 3</li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default App;
