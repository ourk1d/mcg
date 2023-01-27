import Cotizacion from "./pages/Cotizacion";
import Home from "./pages/Home";
import { Routes, Route, HashRouter as Router } from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route exact path='/automoviles' element={ <Cotizacion/>}>
        </Route>
      </Routes>
    </Router>
       )
};


export default App;