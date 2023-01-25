import { Image } from "antd";
import React, { useState } from "react";
import man from "../images/man.png";

const HumanAnatomy = () => {
  const [spotPosition, setSpotPosition] = useState();

  const addMarker = (e) => {
    setSpotPosition({ xoffset: e.clientX, yoffset: e.clientY});
  };

  const buttonStyle = {
    borderRadius: "50px",
    color: "red",
    backgroundColor: "red",
    position: "absolute",
    left: `${spotPosition?.xoffset}px`,
    top: `${spotPosition?.yoffset}px`,
  };

  return (
    <div onClick={(e) => addMarker(e)}>
      {spotPosition && <button style={buttonStyle}>o</button>}
      <Image preview={false} width={200} src={man} />
    </div>
  );
};
export default HumanAnatomy;
