import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Alerta from '../components/Alerta'
import Slider from '../components/Slider'
import Info from '../components/Info'
import Empresas from '../components/Empresas'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Slider/>
    <Info/>
    <Empresas/>
    <Alerta/>
    <Footer/>
    </div>
  )
}

export default Home