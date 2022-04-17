import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import CriarCliente from "../Pages/CadastrarCliente";

const RoutesApp = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/novo_cliente" element={<CriarCliente />} />
    </Routes>
  );
};

export default RoutesApp;
