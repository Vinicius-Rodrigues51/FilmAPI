import React from "react";
import { Container } from "./styleLoginForm";
import Button from "../Form/Button";

const Logout = () => {
  const handleLogout = (event) => {
    event.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("user_login_token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("id_session");

    window.location.assign("/");
  };

  return (
    <Container>
      <h3>Deseja Sair?</h3>
      <form onSubmit={handleLogout}>
        <Button>Sim</Button>
      </form>
    </Container>
  );
};

export default Logout;
