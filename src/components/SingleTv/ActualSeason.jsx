import React, { Fragment } from "react";
import { SeasonStyled } from "./ActualSeasonStyle";
import no_image from "../../Assets/no_image.svg";
import calendar from "../../Assets/calendar.svg";
import star from "../../Assets/star.svg";

const ActualSeason = ({ data }) => {
  const lastSeasonIndex = data.seasons.length - 1;
  const seasonIndex = data.seasons.length - 2;
  // let lastSeason;
  let monthNumber;
  let seasonEnd = "";
  // if (data.seasons[lastSeasonIndex].air_date !== null) {
  const lastSeason = data.seasons[lastSeasonIndex];
  // } else {
  //   lastSeason = data.seasons[seasonIndex];
  // }
  if (lastSeason.air_date) {
    monthNumber = +lastSeason.air_date.substr(5, 2);
  }

  if (data.last_episode_to_air.episode_type === "finale") {
    seasonEnd = "Final da Temporada";
  } else {
    seasonEnd = null;
  }

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
            {lastSeason.poster_path ? (
              <img
                src={`https://www.themoviedb.org/t/p/w130_and_h195_bestv2${lastSeason.poster_path}`}
                alt={`Poster da ${lastSeason.name}`}
              />
            ) : (
              <img src={no_image} alt={`Poster da ${lastSeason.name}`} />
            )}
          </div>
          <div className="details">
            <h2 className="titleOne">{lastSeason.name}</h2>
            <div className="wrapper">
              <div className="detailWrap">
                <span
                  className="star"
                  style={{ backgroundImage: `url(${star})` }}
                ></span>
                {lastSeason.vote_average.toFixed(1)}
              </div>
              {lastSeason.air_date ? (
                <h3>
                  {lastSeason.air_date.substr(0, 4)} •{" "}
                  {lastSeason.episode_count} Episódios
                </h3>
              ) : (
                <h3>— • {lastSeason.episode_count} Episódios</h3>
              )}
            </div>

            {lastSeason.air_date ? (
              <p>
                A {lastSeason.season_number}ª temporada de {data.name} começou a
                ser exibida em {lastSeason.air_date.substr(8, 2)} de{" "}
                {getMonth(monthNumber)} de {lastSeason.air_date.substr(0, 4)}.
              </p>
            ) : (
              <p>{lastSeason.overview}</p>
            )}

            <div className="bottom_details">
              <span className="calendar">
                <img src={calendar} alt="calendar" />
              </span>
              <h2 className="title">{data.last_episode_to_air.name}</h2>
              <h3>
                (
                {`${data.last_episode_to_air.season_number}x${
                  data.last_episode_to_air.episode_number
                }, ${parseInt(
                  data.last_episode_to_air.air_date.substr(8, 2)
                )} de ${getMonth(
                  parseInt(data.last_episode_to_air.air_date.substr(5, 2))
                )} de ${data.last_episode_to_air.air_date.substr(0, 4)}`}
                ){" "}
                {seasonEnd ? (
                  <span className="seasonEndTitle">{seasonEnd}</span>
                ) : null}
              </h3>
            </div>
          </div>
        </div>
      </SeasonStyled>
    </Fragment>
  );
};

export default ActualSeason;
