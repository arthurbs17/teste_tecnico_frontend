import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { TextField } from "@mui/material";
import { criarCliente } from "../../services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import FormWrapper from "./styles";

const CriarClienteForm = () => {
  const [response, setResponse] = useState({});
  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleRegistro = async (data) => {
    console.log({ ...data });
    await criarCliente(data).then((response) => setResponse(response));
    console.log(response);
  };

  useEffect(() => {
    if (response.status === 201) {
      const message = "Cadastro realizado com sucesso!";
      console.log(message);
      history("/clientes");
    } else if (response.status >= 400) {
      const message = "Erro ao criar o cliente";
      console.log(message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <>
      <form onSubmit={handleSubmit(handleRegistro)}>
        <FormWrapper>
          <h2>Cadastre-se</h2>
          <TextField
            variant="outlined"
            label="Nome"
            placeholder="Nome"
            size="small"
            error={!!errors.nome}
            helperText={errors.nome?.message}
            margin="dense"
            {...register("nome")}
          />

          <TextField
            variant="outlined"
            label="Cpf"
            placeholder="Cpf"
            size="small"
            error={!!errors.cpf}
            helperText={errors.cpf?.message}
            margin="dense"
            {...register("cpf")}
          />

          <TextField
            variant="outlined"
            label="Data Nascimento"
            placeholder="Data Nascimento (MM/DD/AAAA)"
            size="small"
            error={!!errors.data_nasc}
            helperText={errors.data_nasc?.message}
            margin="dense"
            {...register("data_nasc")}
          />

          <TextField
            variant="outlined"
            label="Telefone"
            placeholder="Telefone"
            size="small"
            error={!!errors.telefone}
            helperText={errors.telefone?.message}
            margin="dense"
            {...register("telefone")}
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

          <Button type="submit">Cadastrar</Button>
        </FormWrapper>
      </form>
    </>
  );
};

export default CriarClienteForm;
