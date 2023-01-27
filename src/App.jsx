import Cotizacion from "./pages/Cotizacion";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";


const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/automoviles" element={<Cotizacion />} />
      </Routes>
  );
};



export default App;