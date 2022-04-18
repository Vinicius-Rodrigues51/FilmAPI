import React, {
  useState,
  useRef,
  Fragment,
  useEffect,
  useContext,
} from "react";
import { SearchContainer, FilmCard, ContainerItems } from "./style";
import { ReactComponent as SearchIcon } from "../../Assets/search.svg";
import Loading from "../../helper/Loading";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { userContext } from "../../UserContext";

const Search = () => {
  // const [busca, setBusca] = useState("");
  const { busca, setBusca } = useContext(userContext);
  const [type, setType] = useState("movie");
  const { request, loading, data, api_key } = useFetch();
  const submitRef = useRef();
  let movieFilter;
  let tvFilter;
  let buscaValue;

  function getMonth(month) {
    switch (month) {
      case 1:
        return "Janeiro";

      case 2:
        return "Fevereiro";

      case 3:
        return "Março";

      case 4:
        return "Abril";

      case 5:
        return "Maio";

      case 6:
        return "Junho";

      case 7:
        return "Julho";

      case 8:
        return "Agosto";

      case 9:
        return "Setembro";

      case 10:
        return "Outubro";

      case 11:
        return "Novembro";

      case 12:
        return "Dezembro";
    }
  }

  function onSubmitEvent(event) {
    event.preventDefault();
    setBusca(submitRef.current.value);
    const buscaFormatada = busca.split(" ").join("-");
    if (busca != "") {
      request(
        `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=pt-BR&page=1&include_adult=false&query=${buscaFormatada}`
      );
    }
  }

  if (data) {
    movieFilter = data.results.filter((movie) => movie.media_type === "movie");
    tvFilter = data.results.filter((tv) => tv.media_type === "tv");
    console.log(tvFilter);
  }

  function isTrue() {
    if (busca != "" && data) {
      return true;
    } else {
      return false;
    }
  }
  const isThatTrue = isTrue();

  useEffect(() => {
    const tabItems = document.querySelectorAll(".typeUl li");
    const selectedItem = document.querySelector(`#${type}`);

    if (data) {
      selectedItem.classList.add("selected");
    }

    function removeActiveClass() {
      tabItems.forEach((item) => {
        item.classList.remove("selected");
      });
    }

    function selectItem() {
      removeActiveClass();
      this.classList.add("selected");
    }

    tabItems.forEach((item) => {
      item.addEventListener("click", selectItem);
    });
  }, [data]);

  useEffect(() => {
    if (busca !== "") {
      const buscaFormatada = busca.split(" ").join("-");

      request(
        `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=pt-BR&page=1&include_adult=false&query=${buscaFormatada}`
      );
    }
  }, []);

  if (loading) return <Loading />;
  return (
    <Fragment>
      <SearchContainer>
        <form onSubmit={onSubmitEvent}>
          <div className="searchBar">
            <button type="submit">
              <SearchIcon />
            </button>
            <input
              type="text"
              placeholder="Busque seus filmes e series favoritos"
              ref={submitRef}
              onChange={() => setBusca(submitRef.current.value)}
              value={busca}
            />
          </div>
        </form>
      </SearchContainer>

      {busca === "" && <h4>Sua busca não foi encontrada</h4>}
      {isThatTrue && data && (
        <ContainerItems>
          <div className="searchBoard">
            <h1>Resultados para: {busca}</h1>

            <ul className="typeUl">
              <li id="movie" onClick={() => setType("movie")}>
                <p>Filmes</p> <span>{movieFilter.length}</span>
              </li>
              <li id="tv" onClick={() => setType("tv")}>
                <p>Séries</p> <span>{tvFilter.length}</span>
              </li>
            </ul>
          </div>
          {type === "movie" ? (
            <FilmCard>
              {movieFilter.map((item) => (
                <div key={item.id} className="seasonCard">
                  <Link to={`/movie/${item.id}`}>
                    {item.poster_path ? (
                      <div
                        className="image"
                        style={{
                          backgroundImage: `url(https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.poster_path})`,
                        }}
                      ></div>
                    ) : (
                      <div
                        className="image"
                        style={{
                          backgroundImage: `url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg)`,
                          backgroundSize: "50%",
                        }}
                      ></div>
                    )}
                  </Link>
                  <div className="details">
                    <Link to={`/movie/${item.id}`}>
                      <h2>{item.title}</h2>
                    </Link>
                    {item.release_date ? (
                      <h3>
                        {item.release_date.substr(8, 2)} de{" "}
                        {getMonth(+item.release_date.substr(5, 2))} de{" "}
                        {item.release_date.substr(0, 4)}
                      </h3>
                    ) : (
                      ""
                    )}

                    {item.overview ? (
                      <p>{item.overview.substr(0, 250)}...</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </FilmCard>
          ) : (
            <FilmCard>
              {tvFilter.map((item) => (
                <div key={item.id} className="seasonCard">
                  <Link to={`/tv/${item.id}`}>
                    {item.poster_path ? (
                      <div
                        className="image"
                        style={{
                          backgroundImage: `url(https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.poster_path})`,
                        }}
                      ></div>
                    ) : (
                      <div
                        className="image"
                        style={{
                          backgroundImage: `url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg)`,
                          backgroundSize: "50%",
                        }}
                      ></div>
                    )}
                  </Link>
                  <div className="details">
                    <Link to={`/movie/${item.id}`}>
                      <h2>{item.name}</h2>
                    </Link>
                    {item.first_air_date ? (
                      <h3>
                        {item.first_air_date.substr(8, 2)} de{" "}
                        {getMonth(+item.first_air_date.substr(5, 2))} de{" "}
                        {item.first_air_date.substr(0, 4)}
                      </h3>
                    ) : (
                      ""
                    )}

                    {item.overview ? (
                      <p>{item.overview.substr(0, 250)}...</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </FilmCard>
          )}
        </ContainerItems>
      )}
    </Fragment>
  );
};

export default Search;
