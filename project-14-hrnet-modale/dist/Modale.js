import React from "react";
import "./styles.css";
import { useState } from "react";
export function Modale(props) {
  const {
    src
  } = props;
  const [close, setClose] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: close ? "modale_closed" : "modale",
    onClick: () => setClose(true)
  }, /*#__PURE__*/React.createElement("div", {
    className: "modale-opacity"
  }), /*#__PURE__*/React.createElement("div", {
    className: "modale-textbox",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("p", null, "Employee Created!"), /*#__PURE__*/React.createElement("img", {
    src: src,
    className: "modale-textbox_close",
    alt: "close cross",
    onClick: () => setClose(true)
  })));
}