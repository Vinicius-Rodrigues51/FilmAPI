import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginPasswordReset from "./LoginPasswordReset";
import ApprovedSession from "./ApprovedSession";

const Login = () => {
  return (
    <section>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="approved" element={<ApprovedSession />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
