import React from "react";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Account_Details } from "../../api";
import { Container } from "./StyleAccount";

const UserAccount = () => {
  const { request, data } = useFetch();
  const { id } = useParams();

  useEffect(() => {
    const { url, options } = Account_Details(id);

    request(url, options);
  }, [id]);

  if (data === null) return null;
  return (
    <Container>
      <div className={` ${data ? "" : "image"} gradient`}>
        <div className="inner_content">
          <div className="content">
            <span className="avatar">
              <a href={`/conta/${id}`}>
                {data.avatar.tmdb.avatar_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original${data.avatar.tmdb.avatar_path}`}
                    width={"150px"}
                    height={"150px"}
                    alt={data.username}
                  ></img>
                ) : (
                  <span>{data.username.charAt(0).toUpperCase()} </span>
                )}
              </a>
            </span>
            <div className="box">
              <div className="about">
                <div className="content_wrapper flex"></div>
                <h2>Olá, {data.username}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserAccount;
