import React from "react";
import Button from "../Form/Button";
import useFetch from "../../hooks/useFetch";
import { Create_Access_Token } from "../../api";
import { Container } from "./styleLoginForm";

const ApprovedSession = () => {
  const { request, loading } = useFetch();
  const token_key = localStorage.getItem("token");

  async function handleClick(event) {
    event.preventDefault();

    const body = {
      request_token: token_key,
    };

    const { url, options } = Create_Access_Token(body);

    const { json } = await request(url, options);

    if (json.success) {
      const id = json.account_id;
      const access_token = json.access_token;

      localStorage.setItem("id_session", id);
      localStorage.setItem("user_login_token", access_token);
      console.log(id);
      window.location.assign(`/conta/${id}`);
    }
  }

  return (
    <Container>
      <h3>
        Tudo certo com sua autenticação! Clique no botão abaixo para continuar
      </h3>
      <form onSubmit={handleClick}>
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Continuar</Button>
        )}
      </form>
    </Container>
  );
};

export default ApprovedSession;
