import React from "react";
import PropTypes from "prop-types";
import ExperiencesRender from "./ExperiencesRender";

export default function Experiences({ experiences }) {
  return <ExperiencesRender experiences={experiences} />;
}

Experiences.propTypes = {
  experiences: PropTypes.array.isRequired,
};
