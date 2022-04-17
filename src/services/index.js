import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const genericGet = (url) => {
  return api
    .get(url)
    .then((response) => response)
    .catch((err) => err.response);
};

const genericPost = async (url, data) => {
  return await api
    .post(url, data)
    .then((response) => response)
    .catch((err) => err.response);
};

export const getClientes = () => {
  const url = "/clientes";

  return genericGet(url);
};

export const getPedidos = () => {
  const url = "/pedidos";

  return genericGet(url);
};

export const exportArquivoCsv = () => {
  const url = "/download/csv";

  return genericGet(url);
};

export const criarCliente = async (data) => {
  const url = "/clientes";

  return await genericPost(url, data);
};

export const criarPedido = (cliente_id, data) => {
  const url = `/pedidos/${cliente_id}`;

  return genericPost(url, data);
};

export default api;
