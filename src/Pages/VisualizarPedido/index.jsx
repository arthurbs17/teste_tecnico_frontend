import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import PedidoCard from "../../components/PedidoCard";
import { getPedidos } from "../../services";
import { Container } from "./styles";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getPedidos().then((response) => {
      setPedidos(response.data);
    });
  });

  return (
    <Container>
      <h1>Pedidos:</h1>
      {pedidos[0] &&
        pedidos.map((pedido, index) => (
          <PedidoCard pedido={pedido} key={index} />
        ))}
      <div className="divButton">
        <Button onClick={() => navigate("/")}>Voltar</Button>
        <a href="http://localhost:3000/download/csv">
          {" "}
          <Button>Exportar CSV</Button>
        </a>
      </div>
    </Container>
  );
};

export default Pedidos;
