import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Data from "./components/Data";
import Pruebas from "./components/Pruebas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">

      <Navbar/>
      <Data/>
      {/* <Pruebas/> */}
      
    </div>
  );
}

export default App;
