import { Container } from "./styles";

const ClienteCard = ({ cliente }) => {
  return (
    <Container>
      <li key={cliente.id}>
        <p>Id: {cliente.id} </p>
        <p>Nome: {cliente.nome}</p>
        <p>Cpf: {cliente.cpf} </p>
        <p>Data de Nascimento: {cliente.data_nasc} </p>
        <p>Cpf: {cliente.cpf} </p>
      </li>
    </Container>
  );
};

export default ClienteCard;
