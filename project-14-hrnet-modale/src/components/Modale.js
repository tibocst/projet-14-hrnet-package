import React from "react";
import "./styles.css";
import { useState } from "react";

export function Modale(props) {
    const {src} = props
  const [close, setClose] = useState(false)

  return (<div className={close ? "modale_closed" : "modale"} onClick={() => setClose(true)}>
    <div className="modale-opacity"></div>
    <div className="modale-textbox" onClick={(e) => e.stopPropagation()}>
      <p>Employee Created!</p>
      <img src={src} className="modale-textbox_close" alt="close cross" onClick={() => setClose(true)}/>
    </div>
  </div>);
}