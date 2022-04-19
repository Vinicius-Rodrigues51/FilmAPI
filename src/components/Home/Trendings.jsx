import React, { Fragment, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Container } from "./TrendingStyle";

const Trendings = () => {
  const { api_key, data, request } = useFetch();

  useEffect(() => {
    request(`
      https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&page=1`);
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

  return (
    <Fragment>
      <Container>
        <h1>Elenco principal</h1>

        {/* <ul className="castSlider" onScroll={shadowScrollController}>
          {cast.map((actor) => (
            <li className="singleActor" key={actor.id}>
              <div className="castIMG">
                <img
                  src={`https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`}
                  alt=""
                />
              </div>
              <div className="castDet">
                <h3>{actor.name}</h3>
                <p>{actor.character}</p>
              </div>
            </li>
          ))}
          <div className="shadow"></div>
        </ul> */}
      </Container>
    </Fragment>
  );
};

export default Trendings;
