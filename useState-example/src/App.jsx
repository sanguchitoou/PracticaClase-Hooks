import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import InputText from './components/InputText'
import Boton from './components/Boton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  {/* Aca iran las variables para la suma */}
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () =>{
    if (numero1 < 0 || numero2 < 0){
      alert("Solo se pueden sumar numeros positivos");
      setNumero1(0)
      setNumero2(0)
      setResultado(0)
      return;
    }
    let sumar = numero1 + numero2
    setResultado(sumar)
  }

  const restar = () =>{
    let restar = numero1 - numero2
    setResultado(restar)
  }

  const multiplicar = () =>{
    let multiplicar = numero1 * numero2
    setResultado(multiplicar)
  }
  
  const dividir = () =>{
    if (numero1 == 0 || numero2 == 0){
      alert("No se puede dividir entre 0");
      setNumero1(0)
      setNumero2(0)
      setResultado(0)
      return;
    }
    let dividir = numero1 / numero2
    setResultado(dividir)
  }

  //Código para el administrador de tareas
  const [tarea, setTarea] = useState("")
  const [status, setStatus] = useState("")
  const [tareas, setTareas] = useState([])

  //Agregar valores al arreglo
  const agregarTarea = () =>{
    if (tarea.trim() !== ""){
      setTareas([...tareas, tarea, status]);
      setStatus("Pendiente")
      setTarea("");
    }
  }

  return (
    <>
      <h1>Ingrese el número 1</h1>
      <InputText 
      label="Pon el numero 1" 
      placeholder="Ingrese el numero 1" 
      value={numero1}
      onChange={(e) => setNumero1(Number(e.target.value))}
      type="number"/>

      <h1>Ingrese el número 2</h1>
      <InputText 
      label="Pon el numero 1" 
      placeholder="Ingrese el numero 1" 
      value={numero2}
      onChange={(e) => setNumero2(Number(e.target.value))}
      type="number"/>

      <Boton label = "Sumar" onClick={(sumar)} />
      <br />
      <Boton label = "Restar" onClick={(restar)} />
      <br />
      <Boton label = "Multiplicar" onClick={(multiplicar)} />
      <br />
      <Boton label = "Dividir" onClick={(dividir)} />
      <h2>Resultado: {resultado}</h2>

      <InputText
        label="Ingrese tarea"
        placeholder="Ingrese tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        type="text"
      />
 
      <Boton label="Agregar tarea" onClick={agregarTarea} />

      <div className="tareas-container">
        <div className="columna">
          <h2>Tareas Pendientes</h2>
          <ul>
            {tareas.map((tarea, index) => (
              <li key={index}>{tarea}</li>
            ))}
          </ul>
        </div>

        <div className="columna">
          <h2>Tareas Completadas</h2>
          <ul>
            {tareas.map((tarea, index) => (
              <li key={index}>{tarea}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
