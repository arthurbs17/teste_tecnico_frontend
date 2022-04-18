import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ClienteCard from "../../components/ClienteCard";
import { getClientes } from "../../services";
import { Container } from "./styles";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getClientes().then((response) => {
      setClientes(response.data);
    });
  });

  return (
    <Container>
      <h1>Clientes:</h1>
      {clientes[0] &&
        clientes.map((cliente, index) => (
          <ClienteCard cliente={cliente} key={index} />
        ))}
      <div className="divButton">
        <Button onClick={() => navigate("/")}>Voltar</Button>
      </div>
    </Container>
  );
};

export default Clientes;
