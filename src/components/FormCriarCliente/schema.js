import * as yup from "yup";

const schema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório!"),
  cpf: yup.string().required("Cpf é obrigatório"),
  data_nasc: yup.string().required("Data de nascimento é obrigatório"),
  telefone: yup.string(),
  ativo: yup.number().required("Digite 1 para verdadeiro e 2 para falso"),
});

export default schema;
