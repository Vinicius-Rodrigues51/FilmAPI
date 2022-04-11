import React, { Fragment } from "react";
import { SeasonStyled } from "./ActualSeasonStyle";

const ActualSeason = ({ data }) => {
  const lastSeasonIndex = data.seasons.length - 1;
  const lastSeason = data.seasons[lastSeasonIndex];
  console.log(lastSeason);
  const monthNumber = +lastSeason.air_date.substr(5, 2);

  function getMonth(month) {
    switch (month) {
      case 1:
        return "Janeiro";

      case 2:
        return "Fevereiro";

      case 3:
        return "Março";

      case 4:
        return "Abril";

      case 5:
        return "Maio";

      case 6:
        return "Junho";

      case 7:
        return "Julho";

      case 8:
        return "Agosto";

      case 9:
        return "Setembro";

      case 10:
        return "Outubro";

      case 11:
        return "Novembro";

      case 12:
        return "Dezembro";
    }
  }

  return (
    <Fragment>
      <SeasonStyled>
        <h1>Temporada atual</h1>

        <div className="seasonCard">
          <div className="image">
            <img
              src={`https://www.themoviedb.org/t/p/w130_and_h195_bestv2${lastSeason.poster_path}`}
              alt={`Poster da ${lastSeason.name}`}
            />
          </div>
          <div className="details">
            <h2>{lastSeason.name}</h2>
            <h3>
              {lastSeason.air_date.substr(0, 4)} | {lastSeason.episode_count}{" "}
              Episódios
            </h3>

            <p>
              A {lastSeason.season_number}ª temporada de {data.original_name}
              começou a ser exibida em {lastSeason.air_date.substr(
                8,
                2
              )} de {getMonth(monthNumber)} de{" "}
              {lastSeason.air_date.substr(0, 4)}.
            </p>
          </div>
        </div>
      </SeasonStyled>
    </Fragment>
  );
};

export default ActualSeason;
