import React from "react";
import "./Modale.css";
import { useState } from "react";

import CLOSE from './window-close-solid.svg';

function Modale() {
  const [close, setClose] = useState(false)

  return (<div className={close ? "modale_closed" : "modale"} onClick={() => setClose(true)}>
    <div className="modale-textbox" onClick={(e) => e.stopPropagation()}>
      <p>Employee Created!</p>
      <img src={CLOSE} className="modale-textbox_close" alt="close cross" onClick={() => setClose(true)}/>
    </div>
  </div>);
}

export default Modale;