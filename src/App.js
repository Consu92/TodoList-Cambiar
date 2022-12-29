import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UsuarioComponent from "./components/UsuarioComponent";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UsuarioComponent/>}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
