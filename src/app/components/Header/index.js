import React from "react";
import PropTypes from "prop-types";
import HeaderRender from "./HeaderRender";

export default function Header({ name, photo }) {
  return <HeaderRender name={name} photo={photo} />;
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
};
