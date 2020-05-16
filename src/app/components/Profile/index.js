import React from "react";
import PropTypes from "prop-types";
import ProfileRender from "./ProfileRender";

export default function Profile({ profile }) {
  return <ProfileRender profile={profile} />;
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};
