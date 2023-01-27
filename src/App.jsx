import Cotizacion from "./pages/Cotizacion";
import Home from "./pages/Home";
import { HashRouter as Router, Routes, Route} from 'react-router-dom';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/automoviles" element={<Cotizacion/>} />
      </Routes>
    </Router>
  );
};

export default App;