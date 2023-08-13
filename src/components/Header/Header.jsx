import React, { useContext } from "react";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade, tint } from "polished"; // pega a cor utilizada e usa tons de preto com Shade & de branco com Tin
import sun from "../../Assets/sun.png";
import moon from "../../Assets/moon.png";
import { Link, useParams } from "react-router-dom";
import { userContext } from "../../UserContext";
import useFetch from "../../hooks/useFetch";
import { Account_Details } from "../../api";
import { useEffect } from "react";
import logo from "../../Assets/logo.svg";
import smallLogo from "../../Assets/small_logo.svg";
import burger from "../../Assets/burger.svg";
import search_blue from "../../Assets/search_blue.svg";
import MobileWall from "./MobileWall";
import { Fragment } from "react";

const Header = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext); // Puxando o contexto global do theme
  const user = localStorage.getItem("user_login_token");
  const { login } = useContext(userContext);
  const { request, data } = useFetch();
  const id = useParams();
  const windowWidth = window.innerWidth;

  useEffect(() => {
    const { url, options } = Account_Details(id);

    request(url, options);
  }, [login]);

  function isLight() {
    if (title === "light") {
      return sun;
    } else {
      return moon;
    }
  }

  if (data === null) {
    return null;
  } else if (windowWidth > 800) {
    return (
      <Container>
        <Link className="logoBox" to={"/"}>
          <img className="logo" src={logo}></img>
        </Link>

        <nav>
          <ul>
            <Link to={"/search"}>
              <li>Pesquisar</li>
            </Link>
            <Link to={"/movie"}>
              <li>Filmes</li>
            </Link>
            <Link to={"/tv"}>
              <li>Series</li>
            </Link>
            {user ? (
              <Link to={`/conta/${user}`}>
                <li>{data.username}</li>
              </Link>
            ) : (
              false
            )}
            {user ? (
              <Link to={"/logout"}>
                <li>Sair</li>
              </Link>
            ) : (
              <Link to={"/login"}>
                <li>Login</li>
              </Link>
            )}

            <label htmlFor="Switch">
              <img src={isLight()} />
            </label>

            <div id="Switch2">
              <Switch
                id="Switch"
                onChange={toggleTheme}
                checked={title === "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                width={35}
                height={10}
                handleDiameter={18}
                offColor={shade(0.15, colors.primary)}
                onColor={tint(0.5, colors.primary)}
              />
            </div>
          </ul>
        </nav>
      </Container>
    );
  } else if (windowWidth <= 800) {
    return (
      <Fragment>
        <Container>
          <span className="burger">
            <img src={burger} alt="Burger" />
          </span>
          <Link className="logoBox" to={"/"}>
            <img className="logo" src={smallLogo}></img>
          </Link>

          <div className="Icon">
            <Link to={"/search"}>
              <img src={search_blue} alt="search Icon" />
            </Link>
          </div>
        </Container>
        <MobileWall></MobileWall>
      </Fragment>
    );
  }
};

export default Header;
