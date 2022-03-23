import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../helper/Loading";
import useFetch from "../../hooks/useFetch";
import { Wraper, Backdoor, Content } from "./styles";

const SingleMovie = () => {
  const { id } = useParams();
  const { request, data, loading, api_key } = useFetch();

  useEffect(() => {
    request(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pt-BR`
    );
  }, [id]);

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
              <h1>
                {data.title} ({data.release_date.substr(0, 4)})
              </h1>
              <h2>{data.tagline}</h2>
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
