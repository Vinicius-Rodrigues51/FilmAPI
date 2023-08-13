import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { NavWall } from "./styleWall";

const MobileWall = () => {
  return (
    <Fragment>
      <NavWall>
        <nav>
          <ul>
            <Link to={"/"}>
              <li>Filmes</li>
            </Link>
            <Link to={"/"}>
              <li>Series</li>
            </Link>
            <Link to={"/"}>
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      </NavWall>
    </Fragment>
  );
};

export default MobileWall;
