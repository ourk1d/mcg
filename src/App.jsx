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