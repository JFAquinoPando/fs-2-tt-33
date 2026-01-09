import { useState, useId, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { usePeticion } from './hooks/usePeticion.js';

function App() {
  let nombre = useId()
  let nombre2 = useId()
  let nombre3 = useId()
  const [prueba, setPrueba] = useState(0)
  const [count, setCount] = useState(0)


  async function handleClick() {
    // Incrementar contador
    const nuevoCount = count + 1
    setCount(nuevoCount)
    
    // Guardar en localStorage
    useLocalStorage({
      opcion: "guardar",
      valor: nuevoCount
    })
    
    // Obtener datos de la API
    usePeticion({
      url: "https://dragonball-api.com/api/characters",
      metodo: "GET"
    }).then(
      resultado => {
        console.log("resultado", resultado);
        // Guardar nombre del primer personaje
        useLocalStorage({
          opcion: "guardar",
          valor: resultado.items[1].name
        })

        nombre = useLocalStorage({
          opcion: "recuperar"
        })

        console.log("nombre?", nombre);
        
        
      }
    )
    
    
    
    // Recuperar y actualizar estado
    const valorRecuperado = useLocalStorage({
      opcion: "recuperar"
    })
    setPrueba(valorRecuperado)
  }

  // ...resto del código...

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div >
        {nombre}
        {nombre2}
        {nombre3}
        {useId()}
      </div>
    </>
  )
}

export default App
