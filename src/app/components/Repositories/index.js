import React from "react";
import PropTypes from "prop-types";
import RepositoriesRender from "./RepositoriesRender";

export default function Repositories({ repositories }) {
  return <RepositoriesRender repositories={repositories} />;
}

Repositories.propTypes = {
  repositories: PropTypes.array.isRequired,
};
