import React from "react";
import { Buttons } from "./ButtonStyle";

const Button = ({ children, ...props }) => {
  return <Buttons {...props}>{children}</Buttons>;
};

export default Button;
