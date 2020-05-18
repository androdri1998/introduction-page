import React from "react";
import PropTypes from "prop-types";
import { ContainerHeader, Image, TextName } from "./style";

export default function HeaderRender({ name, photo }) {
  return (
    <ContainerHeader>
      {photo && <Image alt="profile" src={photo} />}
      <TextName>{name}</TextName>
    </ContainerHeader>
  );
}

HeaderRender.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
