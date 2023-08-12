import React, { Fragment, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../../helper/Loading";
import useFetch from "../../hooks/useFetch";
import Modal from "../Modal/Modal";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Wraper, Backdoor, Content, Cast, Recomendations } from "./styles";
import { ReactComponent as Player } from "../../Assets/player.svg";
import Midia from "./Midia";
import ActualSeason from "./ActualSeason";
import no_image from "../../Assets/no_image.svg";

const SingleTv = () => {
  const [modal, setModal] = useState(null);
  const { id } = useParams();
  const { request, data, loading, api_key } = useFetch();
  let type = "tv";
  let age;
  let provider;
  let isVideos;
  let cast;

  useEffect(() => {
    request(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}&language=pt-BR&append_to_response=content_ratings,recommendations,credits,videos,watch/providers,images&include_image_language=pt,en`
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
    if (providers) {
      return providers.flatrate[0].logo_path;
    } else if (providersUS && providersUS.flatrate) {
      return providersUS.flatrate[0].logo_path;
    } else {
      return null;
    }
  }

  function getAge() {
    const release = data.content_ratings.results.filter(
      (country) => country.iso_3166_1 === "BR"
    );
    if (release.length > 0) {
      return release[0].rating;
    } else {
      return "";
    }
  }

  function getCast() {
    const cast = data.credits.cast.slice(0, 10);
    return cast;
  }

  if (data) {
    age = getAge();
    cast = getCast();
    provider = getProviders();
    isVideos = isVideo();
  }

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
              <div
                className="zoom"
                style={
                  data.poster_path
                    ? { backgroundColor: "" }
                    : {
                        backgroundColor: "#dbdbdb",
                        borderRadius: "6px",
                        height: "100%",
                      }
                }
              >
                {data.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
                    alt={`Poster do filme ${data.title}`}
                  />
                ) : (
                  <img style={{ height: "180px" }} src={no_image} />
                )}
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
                {data.name} ({data.first_air_date.substr(0, 4)})
              </h1>

              <div className="subDet">
                {age === "" ? null : <span className="age">{age}</span>}
                <span className="genre">
                  {data.genres.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {data.genres.length - 1 == index ? "" : ", "}{" "}
                    </span>
                  ))}
                </span>
                <span className="time">{data.episode_run_time[0] + "m"}</span>
              </div>

              <div className="trailer">
                <ProgressBar data={data.vote_average.toFixed(1)} />
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
              <p className="overview">{data.overview}</p>
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

      <ActualSeason data={data} />

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
          {data.recommendations.results.map((tv) => (
            <ul className="recSlider" key={tv.id}>
              <Link
                to={`/tv/${tv.id}-${tv.original_name.split(" ").join("-")}`}
              >
                <div className="image">
                  {tv.backdrop_path ? (
                    <img
                      src={`https://www.themoviedb.org/t/p/w250_and_h141_face${tv.backdrop_path}`}
                    />
                  ) : (
                    <img
                      style={{
                        height: "141px",
                        width: "250px",
                        backgroundColor: "#d4d4d4",
                      }}
                      src={no_image}
                    />
                  )}
                  <div className="details">
                    <p>{tv.first_air_date.split("-").reverse().join("/")}</p>
                  </div>
                </div>
              </Link>

              <div className="title">
                <h3>{tv.name}</h3>
                <p>{tv.vote_average.toFixed(1) * 10}%</p>
              </div>
            </ul>
          ))}
          <div className="recShadow"></div>
        </div>
      </Recomendations>
    </Fragment>
  );
};

export default SingleTv;
