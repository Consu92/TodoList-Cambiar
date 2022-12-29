import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UsuarioComponent from "./components/UsuarioComponent";
import AutoComponent from "./components/AutoComponent";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UsuarioComponent/>}></Route>
      <Route path='/autos' element={<AutoComponent/>}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
