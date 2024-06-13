import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CadastroEncurtador} from "./cadastro/cadastroEncurtador";
import {ListaURL} from "./listagem/listaURL";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CadastroEncurtador />}></Route>
            <Route path="/lista" element={<ListaURL />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
