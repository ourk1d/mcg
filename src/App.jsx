import Cotizacion from "./pages/Cotizacion";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



const App = () => {
  return (
  <Router>
    <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/automoviles' element={ <Cotizacion/>}>
        </Route>
    </Routes>
  </Router>
  )
};

export default App;