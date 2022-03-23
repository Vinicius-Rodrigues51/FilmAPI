import React, { useContext } from "react";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade, tint } from "polished"; // pega a cor utilizada e usa tons de preto com Shade & de branco com Tin
import sun from "../../Assets/sun.png";
import moon from "../../Assets/moon.png";

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
      <a href="/">
        <h2>Film World</h2>
      </a>

      <nav>
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>List</li>
          </a>
          <a href="#">
            <li>Category</li>
          </a>
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
