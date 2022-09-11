import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Data from "./components/Data";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contacto from "./pages/Contacto";
import HomePage from "./pages/HomePage";
import axios from "axios";
import Testing from "./pages/Testing";
import Error404 from "./pages/Error404";

function App() {
  

  


  return (
    <>

      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/"  >
          <Route index element={<HomePage />} />


        </Route>
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/testing" element={ <Testing/>} />
          <Route path="*" element={<Error404/>} />
          
      </Routes>
      
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
