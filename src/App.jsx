import Cotizacion from "./pages/Cotizacion";
import Home from "./pages/Home";




const App = () => {
  let page 
  switch (window.location.pathname) {
    case "/":
      page = <Home/>
      break
    case "/automoviles":
      page = <Cotizacion/>
      break
      default:
  }
  return (
    <>
    {page}
    </>
  )
};

export default App;