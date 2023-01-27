import Cotizacion from "./pages/Cotizacion";
import Home from "./pages/Home";
import { Routes, Route, HashRouter as Router } from "react-router-dom";


const App = () => {

  return (

      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path='/automoviles' element={ <Cotizacion/>}>
        </Route>
      </Routes>

       )
};


export default App;