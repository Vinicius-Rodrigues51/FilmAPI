import React, { Fragment, useEffect, useRef, useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { Container } from "./style";
import { userContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import Trendings from "./Trendings";

const Home = () => {
  const { request, loading, data, api_key } = useFetch();
  const { busca, setBusca } = useContext(userContext);
  const submitRef = useRef();
  const navigate = useNavigate();

  const onSubmitEvent = (event) => {
    event.preventDefault();
    setBusca(submitRef.current.value);
    navigate("/search");
  };

  useEffect(() => {
    request(`
    https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
  }, []);
  const random = Math.floor(Math.random() * 19 + 1);

  if (data === null) return null;
  return (
    <Fragment>
      <Container>
        <div
          className="background"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(var(--tmdbDarkBlue), 0.8) 0%, rgba(var(--tmdbDarkBlue), 0.8) 100%),url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.results[random].backdrop_path})`,
          }}
        >
          <div className="wraper">
            <h2>Bem-Vindo(a)!</h2>
            <h3>Milhões de Filmes e Séries para Descobrir. Explore já.</h3>

            <div className="search">
              <form onSubmit={onSubmitEvent}>
                <input
                  type="text"
                  placeholder="Buscar por um Filme ou Série..."
                  ref={submitRef}
                />
                <input type="submit" value="Procurar" />
              </form>
            </div>
          </div>
        </div>
      </Container>

      <Trendings />
    </Fragment>
  );
};

export default Home;
