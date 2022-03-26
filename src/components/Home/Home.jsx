import React, { useEffect, useState } from "react";
import { Button, Container, GridContainer } from "./styles";
import useFetch from "../../hooks/useFetch";
import Loading from "../../helper/Loading";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, request, loading, api_key } = useFetch();
  const [page, setPage] = useState(1);

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    const { total_pages } = data;
    if (page < total_pages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    request(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-BR&page=${page}`
    );
  }, [page]);

  if (loading) return <Loading />;
  if (data === null) return null;
  return (
    <Container>
      <h2>Most popular Films</h2>

      <GridContainer>
        {data.results.map((film) => (
          <li key={film.id}>
            <div className="imgBox">
              <Link
                to={`/${film.id}-${film.original_title.split(" ").join("-")}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w400${film.poster_path}`}
                  alt={film.title}
                />
              </Link>
            </div>
            <h3>{film.title}</h3>
          </li>
        ))}
      </GridContainer>

      <div>
        <Button onClick={prevPage}>Anterior</Button>
        <Button onClick={nextPage}>Próximo</Button>
      </div>
    </Container>
  );
};

export default Home;
