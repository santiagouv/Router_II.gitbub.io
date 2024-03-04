import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css";
import Pokemon from "./views/Pokemon";
import Home from "./views/Home";
import { PokedexContext } from "./context/PokedexContext";
import { useContext } from "react";
import Footer from "./components/Footer";


function App() {
  const { pokemon } = useContext(PokedexContext)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='pokemon/:id' element={pokemon ? <Pokemon/>:<Navigate to='/home'/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
