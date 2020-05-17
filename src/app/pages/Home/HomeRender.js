import React from "react";
import PropTypes from "prop-types";
import Profile from "../../components/Profile";
import Repositories from "../../components/Repositories";
import Experiences from "../../components/Experiences";
import { getPhoto, getName } from "../../utils/gets";
import {
  ContainerHome,
  Image,
  ContainerHeader,
  ContaineBody,
  TextName,
} from "./style";

function HomeRender({ repositories, profile, experiences }) {
  return (
    <ContainerHome>
      <ContainerHeader>
        {getPhoto() && <Image alt="profile" src={getPhoto()} />}
        <TextName>{getName() || profile.name}</TextName>
      </ContainerHeader>
      <ContaineBody>
        <Profile profile={profile} />
        <Experiences experiences={experiences} />
      </ContaineBody>
      {/* <Repositories repositories={repositories} /> */}
    </ContainerHome>
  );
}

HomeRender.propTypes = {
  repositories: PropTypes.array.isRequired,
  profile: PropTypes.object.isRequired,
  experiences: PropTypes.array.isRequired,
};

export default HomeRender;
