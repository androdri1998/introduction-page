import React from "react";
import PropTypes from "prop-types";
import Profile from "../../components/Profile";
import Repositories from "../../components/Repositories";
import { ContainerHome } from "./style";

function HomeRender({ repositories, profile }) {
  return (
    <ContainerHome>
      <Profile profile={profile} />
      <Repositories repositories={repositories} />
    </ContainerHome>
  );
}

HomeRender.propTypes = {
  repositories: PropTypes.array.isRequired,
  profile: PropTypes.object.isRequired,
};

export default HomeRender;
