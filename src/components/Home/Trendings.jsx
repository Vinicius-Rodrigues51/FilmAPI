import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Container } from "./TrendingStyle";

const Trendings = () => {
  const { api_key, data, request } = useFetch();

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

  useEffect(() => {
    request(`
      https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=pt-BR&page=1`);
  }, []);

  function shadowScrollController(event) {
    const slider = document.querySelector(".shadow");

    slider.style.right = "-" + event.target.scrollLeft + "px";
    const sliderNum = event.target.scrollLeft;
    if (sliderNum > 80) {
      slider.style.opacity = 0;
    } else {
      slider.style.opacity = 1;
    }
  }

  if (data === null) return null;
  return (
    <Fragment>
      <Container>
        <h1>Em alta</h1>

        <ul className="castSlider" onScroll={shadowScrollController}>
          {data.results.map((film) => (
            <li className="singleActor" key={film.id}>
              <Link to={`/movie/${film.id}-${film.title || film.name}`}>
                <div className="castIMG">
                  <img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.poster_path}`}
                    alt=""
                  />
                </div>
              </Link>
              <div className="castDet">
                <Link to={`/movie/${film.id}-${film.title || film.name}`}>
                  <h3>{film.title || film.name}</h3>
                </Link>
                <h4>
                  {(film.release_date && film.release_date.substr(8, 2)) ||
                    film.first_air_date.substr(8, 2)}{" "}
                  de{" "}
                  {(film.release_date &&
                    getMonth(+film.release_date.substr(5, 2)).substring(
                      0,
                      3
                    )) ||
                    getMonth(+film.first_air_date.substr(5, 2)).substring(
                      0,
                      3
                    )}{" "}
                  de{" "}
                  {(film.release_date && film.release_date.substr(0, 4)) ||
                    film.first_air_date.substr(0, 4)}
                </h4>
              </div>
            </li>
          ))}
          <div className="shadow"></div>
        </ul>
      </Container>
    </Fragment>
  );
};

export default Trendings;
