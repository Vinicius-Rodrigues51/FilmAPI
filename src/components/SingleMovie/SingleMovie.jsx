import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../helper/Loading";
import useFetch from "../../hooks/useFetch";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Wraper, Backdoor, Content, Cast } from "./styles";

const SingleMovie = () => {
  const { id } = useParams();
  const { request, data, loading, api_key } = useFetch();
  let age;
  let crew;
  let characters;
  let cast;

  useEffect(() => {
    request(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pt-BR&append_to_response=release_dates,credits`
    );
  }, [id]);

  // ALTERAR A SCROLL BAR E COLOCAR A IMAGEM DO WATCH PROVIDER, QUE A URL ESTA NO MEU BLOCO DE NOTAS

  function getCast() {
    const cast = data.credits.cast.slice(0, 10);
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
  }

  if (loading) return <Loading />;
  if (data === null) return null;
  return (
    <Fragment>
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
              <div className="content">
                <p>{data.status ? "No Ar" : "Não lançado"}</p>
                <h3>{data.status ? "Assista agora" : ""}</h3>
              </div>
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
                <button className="trailerButton">Reproduzir trailer</button>
              </div>

              <p className="tagline">{data.tagline}</p>
              <h1>Sinopse</h1>
              <p className="overview">{data.overview}</p>

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

        <ul className="castSlider">
          {cast.map((actor) => (
            <li className="singleActor" key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`}
                alt=""
              />
              <div className="castDet">
                <h3>{actor.name}</h3>
                <p>{actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      </Cast>
    </Fragment>
  );
};

export default SingleMovie;
