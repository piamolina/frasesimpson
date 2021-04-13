import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button'
import Frase from './components/Frase'
function App() {
  return (
    <section className="container d-flex flex-column align-items-center my-5">
      <img src={process.env.PUBLIC_URL+"logo_720.png"} alt="logodelossimpson" className="w-75"/>
      <Button variant="warning" className="my-5 w-75">Obtener frase</Button>
<Frase></Frase>
    </section>
  );
}
export default App;
