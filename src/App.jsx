import Cotizacion from "./pages/Cotizacion";
import Home from "./pages/Home";



const App = () => {
  let page = (window.location.pathname.split('/')[2]);
  switch (page) {
    case "":
      page = <Home/>
      break
    case "automoviles":
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


console.log(window.location.pathname.split('/')[2])
export default App;