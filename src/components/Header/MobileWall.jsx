import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { NavWall } from "./styleWall";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { userContext } from "../../UserContext";

const MobileWall = () => {
  const wall = useRef();
  const { wallState, setWallState } = useContext(userContext);

  function handleWall(e) {
    if (wall.current && !wall.current.contains(e.target)) {
      window.removeEventListener("click", handleWall);
      setWallState("");
    }
  }

  useEffect(() => {
    if (wallState === "0") {
      window.addEventListener("click", handleWall);
    }
  }, [wallState]);
  return (
    <Fragment>
      <NavWall ref={wall} style={{ left: wallState }}>
        <nav>
          <ul>
            <Link onClick={() => setWallState("")} to={"/movie"}>
              <li>Filmes</li>
            </Link>
            <Link onClick={() => setWallState("")} to={"/tv"}>
              <li>Series</li>
            </Link>
            <Link onClick={() => setWallState("")} to={"/login"}>
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      </NavWall>
    </Fragment>
  );
};

export default MobileWall;
