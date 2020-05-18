import React from "react";
import PropTypes from "prop-types";
import ItemRepositoryRender from "./ItemRepositoryRender";

export default function ItemRepository({ repository }) {
  return <ItemRepositoryRender repository={repository} />;
}

ItemRepository.propTypes = {
  repository: PropTypes.object.isRequired,
};
