import React, { useEffect, useRef } from "react";
import "./styles.css";
import closesvg from "./window-close-solid.svg";

Modale.defaultProps = {
    options: {
      escapeClose: true,
      clickClose: true,
      closeText: 'Close',
      showClose: true, 
      modalClass: "modale", 
      blockerClass: "modale-opacity",
    }
  }

export function Modale(props) {
  //React Component who display a modale with custom close button
  const modaleRef = useRef(null)
  const setDisplayModale = props.setDisplayModale;
  const options = props.options

  useEffect(() => {
    modaleRef.current.focus()
  }, [])

  const handleEscapeKey = (e) => {
    if(e.key === 'Escape') {
      setDisplayModale(false)
    }
  }

  return (
    // it basicaly display a div on all page on top of other elements
    <div
      className={options.modalClass}
      onClick={() => options.clickClose ? setDisplayModale(false) : null}
      onKeyDown={options.escapeClose ? handleEscapeKey : null}
      ref={modaleRef}
      tabIndex="2"
    >
      {/* modale-opacity is used to display a grey color with low opacity */}
      <div className={options.blockerClass}></div>
      <div className="modale-textbox" onClick={(e) => e.stopPropagation()}>
        <p>{options.closeText}</p>
        {/* close button */}
        {options.showClose ? <img
          src={closesvg}
          className="modale-textbox_close"
          alt="close cross"
          onClick={() => setDisplayModale(false)}
        /> : null}
      </div>
    </div>
  );
}