import React, { useEffect } from "react";
import { ProgressBars } from "./styles";

const ProgressBar = ({ data }) => {
  const data2 = Math.round(data);
  useEffect(() => {
    let bar = document.querySelector(".circular-progress");

    function getColor(value) {
      if (value >= 7) {
        return "21d07a";
      } else if (value >= 4) {
        return "d2d531";
      } else {
        return "db2360";
      }
    }

    function getSecondColor(value) {
      if (value >= 7) {
        return "204529";
      } else if (value >= 4) {
        return "423d0f";
      } else {
        return "571435";
      }
    }

    const color1 = getColor(data);
    const color2 = getSecondColor(data);

    bar.style.background = `conic-gradient(
            #${color1} ${data * 10 * 3.6}deg,
            #${color2} ${data * 10 * 3.6}deg
        )`;
  }, [data]);

  if (data == null) return null;
  return (
    <ProgressBars className="circular-progress">
      <div className="value-container">
        <span className="value">{data2 * 10}</span>
      </div>
    </ProgressBars>
  );
};

export default ProgressBar;
