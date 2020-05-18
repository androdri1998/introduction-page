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
        {getPhoto() ||
          (profile && profile.avatar_url && (
            <Image alt="profile" src={getPhoto() || profile.avatar_url} />
          ))}
        <TextName>{getName() || profile.name}</TextName>
      </ContainerHeader>
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
