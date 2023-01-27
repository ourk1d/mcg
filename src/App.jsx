import Cotizacion from "./pages/Cotizacion";
import Home from "./pages/Home";



const App = () => {
  
  let page 
  switch (window.location.pathname.split("/")[1]) {
    case "/mcg":
      page = <Home/>
      break
    case "/mcg/automoviles":
      page = <Cotizacion/>
      break
      default:
       page = <Home/>
  }
  return (
    <>
    {page}
    </>
  )
};

console.log(window.location.pathname)
export default App;