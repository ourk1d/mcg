import Cotizacion from "./pages/Cotizacion";
import Home from "./pages/Home";
import { Routes, Route, HashRouter as Router } from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path='/automoviles' element={ <Cotizacion/>}>
        </Route>
      </Routes>
    </Router>
       )
};


export default App;