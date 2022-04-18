import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import FormWrapper from "./styles";
import { criarPedido } from "../../services";

const CriarPedidoForm = () => {
  const [response, setResponse] = useState({});
  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleRegistro = async ({
    cliente_id,
    produto,
    valor,
    data,
    ativo,
  }) => {
    await criarPedido(cliente_id, { produto, valor, data, ativo }).then(
      (response) => {
        setResponse(response);
        console.log(response);
      }
    );
    console.log(response);
  };

  useEffect(() => {
    if (response.status === 201) {
      const message = "Pedido realizado com sucesso!";
      console.log(message);
      history("/pedidos");
    } else if (response.status >= 400) {
      const message = "Erro ao registrar pedido";
      console.log(message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <>
      <form onSubmit={handleSubmit(handleRegistro)}>
        <FormWrapper>
          <h2>Registre o pedido</h2>
          <TextField
            variant="outlined"
            label="produto"
            placeholder="produto"
            size="small"
            error={!!errors.produto}
            helperText={errors.produto?.message}
            margin="dense"
            {...register("produto")}
          />

          <TextField
            variant="outlined"
            label="valor"
            placeholder="valor"
            size="small"
            error={!!errors.valor}
            helperText={errors.valor?.message}
            margin="dense"
            {...register("valor")}
          />

          <TextField
            variant="outlined"
            label="Data"
            placeholder="Data (MM/DD/AAAA)"
            size="small"
            error={!!errors.data}
            helperText={errors.data?.message}
            margin="dense"
            {...register("data")}
          />

          <TextField
            variant="outlined"
            label="Ativo"
            placeholder="Ativo (1 para V ou 2 para F)"
            size="small"
            error={!!errors.ativo}
            helperText={errors.ativo?.message}
            margin="dense"
            {...register("ativo")}
          />

          <TextField
            variant="outlined"
            label="Id do Cliente"
            placeholder="Id do Cliente"
            size="small"
            error={!!errors.cliente_id}
            helperText={errors.cliente_id?.message}
            margin="dense"
            {...register("cliente_id")}
          />

          <Button type="submit">Registrar</Button>
        </FormWrapper>
      </form>
    </>
  );
};

export default CriarPedidoForm;
