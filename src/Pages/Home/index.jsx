import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Container } from "./styles";

const Home = () => {
  const history = useNavigate();

  const handleNav = (path) => {
    history(path);
    console.log(path);
  };

  return (
    <Container>
      <h1>Teste Técnico</h1>

      <div>
        <Button onClick={() => handleNav("/novo_cliente")}>
          Cadastrar Cliente
        </Button>

        <Button onClick={() => handleNav("/clientes")}>
          Visualizar Clientes
        </Button>

        <Button onClick={() => handleNav("/novo_pedido")}>
          Cadastrar Pedido
        </Button>

        <Button onClick={() => handleNav("/pedidos")}>
          Visualizar Pedidos
        </Button>
      </div>
    </Container>
  );
};

export default Home;
