import React from "react";
import { userContext } from "../../userContext2";
import useForm from "../../hooks/useForm";
import { Container } from "./styleLoginForm";
import { Link } from "react-router-dom";
import Button from "../Form/Button";
import useFetch from "../../hooks/useFetch";
import { CREATE_REQUEST_TOKEN, Create_Access_Token } from "../../api";
import { useState } from "react";

const LoginForm = () => {
  const { request } = useFetch();
  const api_key = "afc673341e77cf34bbb31f9c3577a6ca";
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");
  const { loading, userLogin, error } = userContext;
  let REQUEST_TOKEN = "";
  // const { token, setToken } = useState("");

  async function handleLogin() {
    const body = {
      username: username.value,
      email: email.value,
      password: password.value,
      request_token: REQUEST_TOKEN,
    };

    const { url, options } = Create_Access_Token(body);

    const { json } = await request(url, options);

    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const body = {
      redirect_to: "http://localhost:3000/login/approved",
      username: username.value,
      email: email.value,
      password: password.value,
    };

    const { url, options } = CREATE_REQUEST_TOKEN(body);

    const { json } = await request(url, options);

    REQUEST_TOKEN = json.request_token;

    // if (json.success) {
    //   window.location.assign(
    //     `https://www.themoviedb.org/authenticate/${REQUEST_TOKEN}?redirect_to=http://http://localhost:3000/login/approved`
    //   );
    // }
    console.log(REQUEST_TOKEN);

    // handleLogin();
  }

  return (
    <Container>
      <h3>
        Para usar os recursos de edição e classificação do Movie World, além de
        obter recomendações pessoais, você precisará entrar com a sua conta.
        Caso você ainda não possua uma conta, registrar-se é grátis e simples.
        Clique{" "}
        <a href="#">
          <Link to="/login/criar">aqui</Link>
        </a>{" "}
        para começar.
      </h3>

      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Login" {...username} />
        <input type="email" name="email" placeholder="Email" {...email} />

        <input
          type="password"
          name="username"
          placeholder="Senha"
          {...password}
        />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {/* <Error error={error} /> */}
      </form>
    </Container>
  );
};

export default LoginForm;
