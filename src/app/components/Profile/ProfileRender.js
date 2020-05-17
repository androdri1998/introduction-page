import React from "react";
import PropTypes from "prop-types";
import {
  ContainerProfile,
  Image,
  TextName,
  LineDescription,
  Description,
} from "./style";
import configProfile from "../../../config.profile";

export default function ProfileRender({ profile }) {
  return (
    <ContainerProfile>
      <Image alt="profile" src={profile.avatar_url} />
      <LineDescription>
        <TextName>{profile.name}</TextName>
        {configProfile.decription && (
          <Description>{configProfile.decription}</Description>
        )}
      </LineDescription>
    </ContainerProfile>
  );
}

ProfileRender.propTypes = {
  profile: PropTypes.object.isRequired,
};
