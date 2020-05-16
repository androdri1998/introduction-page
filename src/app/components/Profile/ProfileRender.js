import React from "react";
import PropTypes from "prop-types";
import { ContainerProfile, Image, TextName, TextUsername } from "./style";

export default function ProfileRender({ profile }) {
  return (
    <ContainerProfile>
      <Image alt="profile" src={profile.avatar_url} />
      <TextName>{profile.name}</TextName>
    </ContainerProfile>
  );
}

ProfileRender.propTypes = {
  profile: PropTypes.object.isRequired,
};
