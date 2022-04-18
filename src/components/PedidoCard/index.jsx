import { Container } from "./styles";

const PedidoCard = ({ pedido }) => {
  return (
    <Container>
      <li key={pedido.id}>
        <p>Id: {pedido.id} </p>
        <p>Nome: {pedido.produto}</p>
        <p>Valor: R$ {pedido.valor} </p>
        <p>Data: {pedido.data} </p>
        <p>Cliente_id: {pedido.cliente_id} </p>
      </li>
    </Container>
  );
};

export default PedidoCard;
