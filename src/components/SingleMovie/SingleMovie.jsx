import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../helper/Loading";
import useFetch from "../../hooks/useFetch";
import { Wraper, Backdoor, Content } from "./styles";

const SingleMovie = () => {
  const { id } = useParams();
  const { request, data, loading, api_key } = useFetch();
  let age;
  let provider;

  useEffect(() => {
    request(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pt-BR&append_to_response=release_dates`
    );
  }, [id]);
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

              <div className="avarage">{data.vote_average * 10}%</div>
              <p>{data.tagline}</p>
              <h1>Sinopse</h1>
              <p>{data.overview}</p>
            </div>
          </Content>
        </Backdoor>
      </Wraper>
    </Fragment>
  );
};

export default SingleMovie;
