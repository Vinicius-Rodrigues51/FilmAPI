import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { userContext } from "../../userContext2";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

const Login = () => {
  //   const { login } = React.useContext(userContext);

  //   if (login) return <Navigate to="/conta" />;

  return (
    <section>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </section>
  );
};

export default Login;
