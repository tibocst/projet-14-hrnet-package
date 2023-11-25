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
    blockerClass: "modale-opacity"
  }
};
export function Modale(props) {
  //React Component who display a modale with custom close button
  const modaleRef = useRef(null);
  const setDisplayModale = props.setDisplayModale;
  const options = props.options;
  useEffect(() => {
    modaleRef.current.focus();
  }, []);
  const handleEscapeKey = e => {
    if (e.key === 'Escape') {
      setDisplayModale(false);
    }
  };
  return (
    /*#__PURE__*/
    // it basicaly display a div on all page on top of other elements
    React.createElement("div", {
      className: options.modalClass,
      onClick: () => options.clickClose ? setDisplayModale(false) : null,
      onKeyDown: options.escapeClose ? handleEscapeKey : null,
      ref: modaleRef,
      tabIndex: "2"
    }, /*#__PURE__*/React.createElement("div", {
      className: options.blockerClass
    }), /*#__PURE__*/React.createElement("div", {
      className: "modale-textbox",
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("p", null, options.closeText), options.showClose ? /*#__PURE__*/React.createElement("img", {
      src: closesvg,
      className: "modale-textbox_close",
      alt: "close cross",
      onClick: () => setDisplayModale(false)
    }) : null))
  );
}