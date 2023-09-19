import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import NavBar from "./Components/Layout/NavBar";
import Footer from './Components/Layout/Footer';
import Home from "./Components/Pages/HomeIndex";
import About from "./Components/Pages/AboutIndex";
import Contact from "./Components/Pages/ContactIndex";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
