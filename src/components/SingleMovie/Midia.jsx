import React, { Fragment, useEffect } from "react";
import Loading from "../../helper/Loading";
import useFetch from "../../hooks/useFetch";
import Modal from "../Modal/Modal";
import { MidiaStyle } from "./MidiaStyle";

const Midia = ({ data, loading, modal, setModal, type, id }) => {
  let video;

  function getVideoURL() {
    const videoURL = data.videos.results[0].key;
    if (videoURL) {
      return videoURL;
    }
  }

  useEffect(() => {
    const tabItems = document.querySelectorAll(".midiaTitles h3");
    const tabContent = document.querySelectorAll(".tab-content-item");

    function removeShowClass() {
      tabContent.forEach((video) => {
        video.classList.remove("show");
      });
    }

    function removeActiveClass() {
      tabItems.forEach((item) => {
        item.classList.remove("active");
      });
    }

    function selectItem() {
      removeShowClass();
      removeActiveClass();

      this.classList.add("active");

      const tabShow = document.querySelector(`#${this.id}-content`);

      tabShow.classList.add("show");
    }

    tabItems.forEach((item) => {
      item.addEventListener("click", selectItem);
    });
  }, []);

  if (data) {
    video = getVideoURL();
  }

  if (loading) return <Loading />;
  return (
    <Fragment>
      {modal && <Modal modal={modal} setModal={setModal} id={id} type={type} />}
      <MidiaStyle>
        <div className="midiaTitles">
          <h2>Mídias</h2>
          <h3 id="populares" className="active">
            Mais populares
          </h3>
          <h3 id="videos">Videos {data.videos.results.length}</h3>
          <h3>Imagens {data.images.logos.length}</h3>
          <h3>Pôsteres {data.images.posters.length}</h3>
        </div>

        <div className="populares show tab-content-item" id="populares-content">
          <div className="trailer ">
            <iframe
              type="text/html"
              style={{ background: "#000" }}
              width="660"
              height="392"
              src={`//www.youtube.com/embed/${video}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=pt&modestbranding=1&fs=1&autohide=1`}
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
          <div className="img">
            <img
              src={`https://image.tmdb.org/t/p/w533_and_h300_multi_faces${data.backdrop_path}`}
              alt=""
            />
          </div>
        </div>

        <div className="videos tab-content-item" id="videos-content">
          {data.videos.results.map((video) => (
            <div key={video.id}>
              {" "}
              <iframe
                type="text/html"
                style={{ background: "#000" }}
                width="700"
                height="392"
                src={`//www.youtube.com/embed/${video.key}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=pt&modestbranding=1&fs=1&autohide=1`}
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>
          ))}
        </div>
      </MidiaStyle>
    </Fragment>
  );
};

export default Midia;
