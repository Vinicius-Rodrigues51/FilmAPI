import React, { useEffect, useState } from "react";
import { Button, Container, GridContainer } from "./styles";
import useFetch from "../../hooks/useFetch";
import Loading from "../../helper/Loading";
import { Link } from "react-router-dom";
import no_image from "../../Assets/no_image.svg";

const Series = () => {
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
      `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=pt-BR&page=${page}`
    );
  }, [page]);

  if (loading) return <Loading />;
  if (data === null) return null;
  return (
    <Container>
      <h2>Series em alta</h2>

      <GridContainer>
        {data.results.map((tv) => (
          <li key={tv.id}>
            <div style={{ background: "#d4d4d4" }} className="imgBox">
              <Link to={`${tv.id}-${tv.original_name.split(" ").join("-")}`}>
                {tv.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w400${tv.poster_path}`}
                    alt={tv.name}
                  />
                ) : (
                  <img
                    style={{ height: "180px" }}
                    src={no_image}
                    alt={tv.name}
                  />
                )}
              </Link>
            </div>
            <h3>{tv.name}</h3>
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

export default Series;
