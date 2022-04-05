import React, { useEffect } from "react";
import Loading from "../../helper/Loading";
import useFetch from "../../hooks/useFetch";
import { ModalStyle } from "./style";
import { ReactComponent as Close } from "../../Assets/x.svg";

const Modal = ({ modal, setModal, id, type }) => {
  const { request, data, loading, api_key } = useFetch();
  let video;

  useEffect(() => {
    request(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${api_key}&language=pt-BR&append_to_response=videos`
    );
  }, [id]);

  function getVideoURL() {
    const videoURL = data.videos.results[0].key;
    if (videoURL) {
      return videoURL;
    }
  }

  function handleOutsideClick({ target, currentTarget }) {
    if (target === currentTarget) {
      setModal(null);
    }
  }

  if (data) {
    video = getVideoURL();
  }

  return (
    <ModalStyle>
      {loading && <Loading />}
      {data && (
        <div className="modalBox" onClick={handleOutsideClick}>
          <div className="topBox">
            <span className="title">Assistir trailer</span>
            <span className="xButton" onClick={() => setModal(null)}>
              <Close />
            </span>
          </div>
          <iframe
            type="text/html"
            style={{ background: "#000" }}
            width="1420"
            height="798"
            src={`//www.youtube.com/embed/${video}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=pt&modestbranding=1&fs=1&autohide=1`}
            frameBorder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
      )}
    </ModalStyle>
  );
};

export default Modal;
