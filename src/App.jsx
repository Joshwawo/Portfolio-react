import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Data from "./components/Data";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contacto from "./pages/Contacto";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"  >
          <Route index element={<HomePage/>} />

        </Route>
          <Route path="/contacto" element={<Contacto/>} />
      </Routes>
      
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
