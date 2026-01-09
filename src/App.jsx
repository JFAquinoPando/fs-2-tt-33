import './App.css'
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import { Menu } from './componentes/Menu';
import { Animes } from './paginas/Animes';
import { Contacto } from './paginas/Contacto';

function App() {

  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
            <h1>Hola, esto es la home</h1>
        </Route>
        <Route exact path="/animes">
            <Animes />
        </Route>
        <Route exact path="/contacto" >
          <Contacto />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
