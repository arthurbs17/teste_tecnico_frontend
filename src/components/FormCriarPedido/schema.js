import * as yup from "yup";

const schema = yup.object().shape({
  produto: yup.string().required("Produto é obrigatório!"),
  valor: yup.number().required("Valor é obrigatório"),
  data: yup.string().required("Data é obrigatório"),
  ativo: yup.number().required("Digite 1 para verdadeiro e 2 para falso"),
  cliente_id: yup.number().required("Id do cliente é obrigatório"),
});

export default schema;
