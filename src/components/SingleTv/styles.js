import styled from "styled-components";

export const Wraper = styled.div`
  width: 100%;
  height: 570px;
  background-position: right -200px center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 820px) {
    height: auto;
    background-position: calc((((100vw / 2.222222) - 20px) / 1.5) / 2) 0;
    background-color: rgb(31.5, 31.5, 31.5);
  }
`;

export const Backdoor = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(31.5, 31.5, 31.5, 1) 150px,
    rgba(31.5, 31.5, 31.5, 0.6) 100%
  );

  @media (max-width: 820px) {
    background: linear-gradient(
      to right,
      rgba(31.5, 31.5, 31.5, 1) 20%,
      rgba(31.5, 31.5, 31.5, 0) 50%
    );
    padding: 0 30px;
  }
`;

export const Content = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  height: 100%;
  padding: 30px 0;
  display: grid;
  grid-template-columns: auto 1fr;

  .box {
    display: flex;
    flex-direction: column;
    gap: 0;

    p {
      color: #ddd;
    }
  }

  .zoom {
    overflow: hidden;
    width: 300px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .zoom img {
    max-width: 100%;
    height: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.07);
    }
  }

  .content {
    background: rgb(3, 37, 65);
    text-align: left;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    p,
    h3 {
      font-size: 18px;
    }

    .descript {
      padding: 10px 0;
    }
  }

  .provider {
    height: 40px;
    width: 40px;
    img {
      height: 40px;
      width: 40px;
      border-radius: 4px;
    }
  }
  .details {
    margin-left: 30px;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 70px 0;

    .age {
      display: inline-block;
      margin-right: 5px;
      padding: 0.06em 4px 0.15em 4px;
      color: rgba(255, 255, 255, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.6);
      align-items: center;
      justify-content: center;
      display: inline-flex;
      border-radius: 2px;
      line-height: 1;
      font-size: 1em;
    }

    .time {
      position: relative;
      margin-left: 20px;
      &::before {
        content: "";
        width: 5px;
        height: 5px;
        position: absolute;
        left: -13px;
        top: 8px;
        display: inline-flex;
        align-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 100%;
      }
    }

    .genre {
      position: relative;
      margin-left: 0px;
    }

    .releaseDate {
      margin-right: 5px;
    }

    .subDet {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .avarage {
      background-color: #081c22;
      display: flex;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 1.3rem;
    }

    h2,
    p {
      color: #ddd;
    }
  }

  .consensus {
    width: 68px;
    height: 68px;
    display: inline-block;
  }

  .outer_ring {
    display: inline-block;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    padding: 4px;
    background-color: #081c22;
  }

  .user_score_chart {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .percent {
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      color: #fff;
    }
  }

  .tagline {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .trailer {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .player {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:hover .trailerButton {
      color: rgba(255, 255, 255, 0.6);
    }

    &:hover .svg path {
      fill: rgba(255, 255, 255, 0.6);
    }
  }

  .svg path {
    fill: #fff;
    transition: fill 0.3s ease;
  }

  .overview {
    margin-bottom: 20px;
  }

  .trailerButton {
    font-size: 20px;
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px 0;
    transition: color 0.3s ease;
  }

  .credits {
    max-width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    h4 {
      font-weight: bold;
    }
  }
`;

export const Cast = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;

  &::-webkit-scrollbar-thumb {
    background-color: rgb(227, 227, 227);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  .castSlider {
    width: 100%;
    overflow-x: auto;
    display: flex;
    gap: 20px;
    margin: 20px 0;
    padding: 0 10px;
    position: relative;

    &::-webkit-scrollbar {
      height: 8px;
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: rgb(219, 219, 219);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  .shadow {
    content: "";
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(
      to right,
      transparent 0%,
      ${(props) => props.theme.colors.background} 100%
    );
    will-change: opacity;
    pointer-events: none;
    transition: opacity linear 0.3s;
  }

  .singleActor {
    width: 140px;
    margin-bottom: 20px;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    border-radius: 7px;
    box-shadow: 1px 2px 13px -5px #000000;
  }

  .castIMG {
    width: 140px;
    height: 177px;
    background-color: rgb(224, 224, 224);
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .castDet {
    margin: 10px;
    font-size: 16px;

    h3 {
      font-weight: bold;
      font-size: 18px;
    }
  }

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 140px;
  }

  @media (max-width: 820px) {
    h1 {
      font-size: 1.2em;
      font-weight: bold;
      margin-left: 20px;
    }

    .singleActor {
      width: 120px;
      margin-bottom: 20px;
      background: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
      border-radius: 7px;
      box-shadow: 1px 2px 13px -5px #000000;
    }

    .castIMG {
      width: 120px;
      height: 152px;
      background-color: rgb(224, 224, 224);
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

    img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      width: 120px;
    }
  }
`;

export const Recomendations = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 100px;
  position: relative;

  .recSlider {
    width: 250px;
    height: 227px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(227, 227, 227);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  h1 {
    margin-bottom: 30px;
  }

  .items {
    display: flex;
    gap: 20px;
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 8px;
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: rgb(219, 219, 219);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    img {
      border-radius: 10px;
    }

    .image {
      position: relative;
      cursor: pointer;

      &:hover .details {
        opacity: 1;
      }
    }

    .details {
      position: absolute;
      bottom: 5px;
      left: 0px;
      background-color: rgba(255, 255, 255, 0.8);
      width: 100%;
      padding: 8px;
      color: #000;
      opacity: 0;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      transition: opacity 0.2s ease-in-out;
    }

    .title {
      display: flex;
      justify-content: space-between;
      padding: 0 2px;
      align-items: center;
    }

    .recShadow {
      content: "";
      width: 60px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background-image: linear-gradient(
        to right,
        transparent 0%,
        ${(props) => props.theme.colors.background} 100%
      );
      will-change: opacity;
      pointer-events: none;
      transition: opacity linear 0.3s;
    }
  }
`;

export const MobileContent = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  height: 100%;
  padding: 30px 0;

  .box {
    display: flex;
    flex-direction: column;
    gap: 0;

    p {
      color: #ddd;
    }
  }

  .zoom {
    overflow: hidden;
    width: 97px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .zoom img {
    max-width: 100%;
    height: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.07);
    }
  }

  .content {
    background: rgb(3, 37, 65);
    text-align: left;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    p,
    h3 {
      font-size: 18px;
    }
  }
`;

export const MobileDetails = styled.div`
  background-color: rgb(31.5, 31.5, 31.5);
  color: #fff;

  .titleBox {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .title {
    font-size: calc(0.7em + 3vw);

    span {
      opacity: 0.8;
      font-size: 0.8em;
    }
  }

  .vote_trailer {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  .vote {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    /* max-width: 60px; */

    h2 {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .trailer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .trailer h2 {
    font-size: 16px;
    font-weight: bold;
  }

  .divisor {
    width: 1px;
    height: 24px;
    border-left: 1px solid rgb(255, 255, 255, 0.3);
    margin-top: 4px;
    padding-right: 2px;
  }

  .play {
    filter: invert(1);
    margin-right: 6px;
    width: 1em;
    height: 1em;
  }

  .subDet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  .ageDetails {
    margin-bottom: 6px;
  }

  .certification {
    border: 1px solid rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.6);
    padding: 0.06em 4px !important;

    display: inline-flex;
    white-space: nowrap;
    align-items: center;
    align-content: center;
    line-height: 1;
    border-radius: 2px;
  }

  .genre {
    font-size: 0.9em;
    color: #fff;
    font-weight: 400;
  }

  .overview {
    padding: 10px 20px;

    h1 {
      font-size: 1.2em;
      margin: 10px 0 8px 0;
    }
  }

  .tagline h2 {
    font-size: 1em;
    font-weight: 400;
    color: #fff;
    opacity: 0.7;
    font-style: italic;
  }

  .text {
    margin-bottom: 30px;
    font-size: 0.9em;
  }
`;
