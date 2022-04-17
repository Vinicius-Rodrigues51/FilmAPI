import React, { useContext } from "react";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade, tint } from "polished"; // pega a cor utilizada e usa tons de preto com Shade & de branco com Tin
import sun from "../../Assets/sun.png";
import moon from "../../Assets/moon.png";
import { Link } from "react-router-dom";

const Header = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext); // Puxando o contexto global do theme

  function isLight() {
    if (title === "light") {
      return sun;
    } else {
      return moon;
    }
  }

  return (
    <Container>
      <Link to={"/"}>
        <h2>Film World</h2>
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
};

export default Header;
