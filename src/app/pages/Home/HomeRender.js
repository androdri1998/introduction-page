import React from "react";
import PropTypes from "prop-types";
import Profile from "../../components/Profile";
import Repositories from "../../components/Repositories";
import Experiences from "../../components/Experiences";
import Header from "../../components/Header";
import { getPhoto, getName } from "../../utils/gets";
import { ContainerHome, ContaineBody } from "./style";

function HomeRender({ repositories, profile, experiences }) {
  return (
    <ContainerHome>
      <Header
        photo={getPhoto() || profile.avatar_url}
        name={getName() || profile.name}
      />
      <ContaineBody>
        <Profile profile={profile} />
        <Experiences experiences={experiences} />
        <Repositories repositories={repositories} />
      </ContaineBody>
    </ContainerHome>
  );
}

HomeRender.propTypes = {
  repositories: PropTypes.array.isRequired,
  profile: PropTypes.object.isRequired,
  experiences: PropTypes.array.isRequired,
};

export default HomeRender;
