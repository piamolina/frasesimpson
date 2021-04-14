import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button'
import Frase from './components/Frase'
import {useState, useEffect} from "react"
import Spinner from "./components/Spinner";

function App() {
  // crear el state

  const [personaje, setPersonaje]= useState({});
  const [cargando, setCargando]= useState(false);

  useEffect(()=>{
//aqui traigo los datos de la api
  }, []); 

  const consultarAPI = async() =>{
    //mostrar el spinner
    setCargando(true);
    const respuesta = await fetch ("https://thesimpsonsquoteapi.glitch.me/quotes");
    const resultado = await respuesta.json();
    console.log(resultado[0]);
    //mostrar el componente frase

    setTimeout(()=>{
      setCargando(false);
      setPersonaje(resultado[0]);
    },2500);
   
  };
  //(condicion logica)?(codigo cuando es verdadera):(codigo cuando la condicion es falsa)
const mostrarComponente=(cargando === true)?(<Spinner></Spinner>):(<Frase personaje={personaje}></Frase>);


  return (
    <section className="container d-flex flex-column align-items-center my-5">
      <img src={process.env.PUBLIC_URL+"logo_720.png"} alt="logodelossimpson" className="w-75"/>
      <Button variant="warning" className="my-5 w-75" onClick={()=> consultarAPI()}>Obtener frase</Button>
{mostrarComponente}

    </section>
  );
}
export default App;
