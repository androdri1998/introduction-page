import React from "react";
import PropTypes from "prop-types";
import ItemExperienceRender from "./ItemExperienceRender";

export default function ItemExperience({ experience }) {
  return <ItemExperienceRender experience={experience} />;
}

ItemExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};
