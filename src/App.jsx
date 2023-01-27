import Cotizacion from "./pages/Cotizacion";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';




const App = () => {
  return (
    <Router basename="/mcg">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/automoviles" element={<Cotizacion/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;