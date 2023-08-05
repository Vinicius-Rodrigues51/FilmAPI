import React from "react";
import { Container } from "./styleLoginForm";
import Button from "../Form/Button";
import useFetch from "../../hooks/useFetch";
import { CREATE_REQUEST_TOKEN } from "../../api";

const LoginForm = () => {
  const { request, loading } = useFetch();
  let REQUEST_TOKEN = "";

  async function handleSubmit(event) {
    event.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("id_session");
    localStorage.removeItem("user_login_token");

    const body = {
      redirect_to: "http://localhost:3000/login/approved",
    };

    const { url, options } = CREATE_REQUEST_TOKEN(body);

    const { json } = await request(url, options);

    REQUEST_TOKEN = json.request_token;

    if (json.success) {
      window.localStorage.setItem("token", REQUEST_TOKEN);
      window.location.assign(
        `https://www.themoviedb.org/auth/access?request_token=${REQUEST_TOKEN}`
      );
    }
  }

  return (
    <Container>
      <h3>
        Para usar os recursos de edição e classificação do Movie World, além de
        obter recomendações pessoais, você precisará entrar com a sua conta no
        site The Movie DB. Caso você ainda não possua uma conta, registrar-se é
        grátis e simples. Clique no botão abaixo para se cadastrar ou fazer
        Login
      </h3>

      <form onSubmit={handleSubmit}>
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
      </form>
    </Container>
  );
};

export default LoginForm;
