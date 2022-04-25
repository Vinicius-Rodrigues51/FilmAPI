import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../helper/Loading";
import useFetch from "../../hooks/useFetch";
import Modal from "../Modal/Modal";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Wraper, Backdoor, Content, Cast, Recomendations } from "./styles";
import { ReactComponent as Player } from "../../Assets/player.svg";
import Midia from "./Midia";

const SingleMovie = () => {
  const [modal, setModal] = useState(null);
  const { id } = useParams();
  const { request, data, loading, api_key } = useFetch();
  let type = "movie";
  let age;
  let crew;
  let characters;
  let cast;
  let provider;
  let isVideos;

  useEffect(() => {
    request(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pt-BR&append_to_response=release_dates,recommendations,credits,videos,watch/providers,images&include_image_language=pt,en`
    );
  }, [id]);

  function isVideo() {
    if (data.videos.results.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  function getProviders() {
    const providers = data["watch/providers"].results.BR;
    const providersUS = data["watch/providers"].results.US;
    if (providers && providers.flatrate) {
      return providers.flatrate[0].logo_path;
    } else if (providersUS && providersUS.flatrate) {
      return providersUS.flatrate[0].logo_path;
    } else {
      return null;
    }
  }

  function getCast() {
    const cast = data.credits.cast.slice(0, 13);
    return cast;
  }

  function getCrew() {
    const crew = data.credits.crew.filter(
      (crewMember) => crewMember.job === "Director"
    );
    if (crew.length) {
      return crew;
    }
  }

  function getCharacters() {
    const crew = data.credits.crew.filter(
      (crewMember) => crewMember.job === "Characters"
    );
    if (crew.length) {
      return crew;
    }
  }

  function getAge() {
    const release = data.release_dates.results.filter(
      (country) => country.iso_3166_1 === "BR"
    );
    if (release.length > 0) {
      return release[0].release_dates[0].certification;
    } else {
      return "";
    }
  }
  if (data) {
    age = getAge();
    crew = getCrew();
    characters = getCharacters();
    cast = getCast();
    provider = getProviders();
    isVideos = isVideo();
  }

  function shadowScrollController(event) {
    const slider = document.querySelector(".shadow");
    const recSlider = document.querySelector(".recShadow");

    slider.style.right = "-" + event.target.scrollLeft + "px";
    recSlider.style.right = "-" + event.target.scrollLeft + "px";
    const sliderNum = event.target.scrollLeft;
    if (sliderNum > 80) {
      slider.style.opacity = 0;
      recSlider.style.opacity = 0;
    } else {
      slider.style.opacity = 1;
      recSlider.style.opacity = 1;
    }
  }

  if (loading) return <Loading />;
  if (data === null) return null;
  return (
    <Fragment>
      {modal && <Modal modal={modal} setModal={setModal} id={id} type={type} />}
      <Wraper
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path})`,
        }}
      >
        <Backdoor>
          <Content>
            <div className="box">
              <div className="zoom">
                <img
                  src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
                  alt={`Poster do filme ${data.title}`}
                />
              </div>

              {provider && (
                <div className="content">
                  <div className="provider">
                    <img
                      src={`https://image.tmdb.org/t/p/original${provider}`}
                      alt=""
                    />
                  </div>

                  <div className="descript">
                    <p>No ar</p>
                    <h3>Assista agora</h3>
                  </div>
                </div>
              )}
            </div>
            <div className="details">
              <h1 className="title">
                {data.title} ({data.release_date.substr(0, 4)})
              </h1>

              <div className="subDet">
                {age === "" ? null : <span className="age">{age}</span>}
                <span className="releaseDate">
                  {data.release_date.split("-").reverse().join("/")} (BR)
                </span>
                <span className="genre">
                  {data.genres.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {data.genres.length - 1 == index ? "" : ", "}{" "}
                    </span>
                  ))}
                </span>
                <span className="time">
                  {Math.floor(data.runtime / 60)}h{" "}
                  {data.runtime > 60 ? (data.runtime % 60) + "m " : ""}
                </span>
              </div>

              <div className="trailer">
                <ProgressBar data={data.vote_average} />
                {isVideos && (
                  <div className="player" onClick={() => setModal(true)}>
                    <Player className="svg" />
                    <button className="trailerButton">
                      Reproduzir trailer
                    </button>
                  </div>
                )}
              </div>

              <p className="tagline">{data.tagline}</p>
              <h1>Sinopse</h1>
              <p className="overview">
                {data.overview.substr(0, 700)}{" "}
                {data.overview.length > 700 ? "..." : ""}
              </p>

              <div className="credits">
                {crew.map((member) => (
                  <div key={member.id}>
                    <h4>{member.name}</h4>
                    <p>Diretor</p>
                  </div>
                ))}

                {characters &&
                  characters.map((member) => (
                    <div key={member.id}>
                      <h4>{member.name}</h4>
                      <p>Personagens</p>
                    </div>
                  ))}
              </div>
            </div>
          </Content>
        </Backdoor>
      </Wraper>

      <Cast>
        <h1>Elenco principal</h1>

        <ul className="castSlider" onScroll={shadowScrollController}>
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
        </ul>
      </Cast>

      <Midia
        data={data}
        loading={loading}
        modal={modal}
        setModal={setModal}
        type={type}
        id={id}
      />

      <Recomendations>
        <h1>Recomendações</h1>
        <div className="items" onScroll={shadowScrollController}>
          {data.recommendations.results.map((movie) => (
            <ul className="recSlider" key={movie.id}>
              <Link
                to={`/movie/${movie.id}-${movie.original_title
                  .split(" ")
                  .join("-")}`}
              >
                <div className="image">
                  <img
                    src={`https://www.themoviedb.org/t/p/w250_and_h141_face${movie.backdrop_path}`}
                  />
                  <div className="details">
                    <p>{movie.release_date.split("-").reverse().join("/")}</p>
                  </div>
                </div>
              </Link>

              <div className="title">
                <h3>{movie.title}</h3>
                <p>{movie.vote_average.toFixed(1) * 10}%</p>
              </div>
            </ul>
          ))}
          <div className="recShadow"></div>
        </div>
      </Recomendations>
    </Fragment>
  );
};

export default SingleMovie;
