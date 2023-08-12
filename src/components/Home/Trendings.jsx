import React, { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Container } from "./TrendingStyle";
import { useState } from "react";
import MultiProgressBar from "../MultiProgressBar/MultiProgressBar";

const Trendings = () => {
  const { api_key, data, request } = useFetch();
  const [period, setPeriod] = useState("day");
  const [opacity, setOpacity] = useState(100);
  const firstAnchor = useRef();
  const secondAnchor = useRef();

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

  function handleAnchorOne() {
    setOpacity(0);
    secondAnchor.current.classList.remove("selected");
    firstAnchor.current.classList.add("selected");

    setTimeout(() => {
      setPeriod("day");
      setTimeout(() => {
        setOpacity(1);
      }, 300);
    }, 999);
  }

  function handleAnchorTwo() {
    setOpacity(0);
    firstAnchor.current.classList.remove("selected");
    secondAnchor.current.classList.add("selected");

    setTimeout(() => {
      setPeriod("week");
      setTimeout(() => {
        setOpacity(1);
      }, 300);
    }, 999);
  }

  useEffect(() => {
    request(`
      https://api.themoviedb.org/3/trending/all/${period}?api_key=${api_key}&language=pt-BR&page=1`);
  }, [period]);

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
        <div className="column_header">
          <h1>Tendências</h1>
          <div className="selector_wrap">
            <div className="selector">
              <div
                onClick={handleAnchorOne}
                id="day"
                ref={firstAnchor}
                className={`anchor selected`}
              >
                <h3>
                  <a id="day">Hoje</a>
                </h3>
              </div>
              <div
                onClick={handleAnchorTwo}
                ref={secondAnchor}
                id="week"
                className={`anchor`}
              >
                <h3>
                  <a id="week">Esta Semana</a>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <ul className="castSlider" onScroll={shadowScrollController}>
          {data.results.map((film) => (
            <li
              style={{ opacity: opacity }}
              className="singleActor"
              key={film.id}
            >
              <Link to={`/movie/${film.id}-${film.title || film.name}`}>
                <div className="castIMG">
                  <img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.poster_path}`}
                    alt=""
                  />
                  <MultiProgressBar data={film.vote_average.toFixed(1)} />
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
