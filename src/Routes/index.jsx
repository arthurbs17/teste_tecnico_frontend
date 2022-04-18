import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import CriarCliente from "../Pages/CadastrarCliente";
import Clientes from "../Pages/VisualizarClientes";
import CriarPedido from "../Pages/CadastrarPedido";
import Pedidos from "../Pages/VisualizarPedido";

const RoutesApp = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/novo_cliente" element={<CriarCliente />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/novo_pedido" element={<CriarPedido />} />
      <Route path="/pedidos" element={<Pedidos />} />
    </Routes>
  );
};

export default RoutesApp;
