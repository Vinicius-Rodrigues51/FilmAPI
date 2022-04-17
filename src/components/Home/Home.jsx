import React, { Fragment, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Container } from "./style";

const Home = () => {
  const { request, loading, data, api_key } = useFetch();

  useEffect(() => {
    request(`
    https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    console.log(data);
  }, []);

  const random = Math.floor(Math.random() * 10 + 1);

  if (data === null) return null;
  return (
    <Fragment>
      <Container>
        <div
          className="background"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(var(--tmdbDarkBlue), 0.8) 0%, rgba(var(--tmdbDarkBlue), 0.8) 100%),url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.results[random].backdrop_path})`,
          }}
        ></div>
      </Container>
    </Fragment>
  );
};

export default Home;
