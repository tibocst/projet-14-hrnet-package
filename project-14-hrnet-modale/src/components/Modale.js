import React from "react";
import "./styles.css";
import { useState } from "react";

export function Modale(props) {
  //React Component taking svg file to display a modale with custom close button
  const { src } = props;
  const [close, setClose] = useState(false);

  return (
    // it basicaly display a div on all page on top of other elements
    <div
      className={close ? "modale_closed" : "modale"}
      onClick={() => setClose(true)}
    >
      {/* modale-opacity is used to display a grey color with low opacity */}
      <div className="modale-opacity"></div>
      <div className="modale-textbox" onClick={(e) => e.stopPropagation()}>
        <p>Employee Created!</p>
        {/* custom close button */}
        <img
          src={src}
          className="modale-textbox_close"
          alt="close cross"
          onClick={() => setClose(true)}
        />
      </div>
    </div>
  );
}
