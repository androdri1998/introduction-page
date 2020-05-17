import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import {
  ContainerRepositories,
  TitleDescriptionExperience,
  Name,
  ItemExperience,
  Description,
  Line,
} from "./style";

export default function ExperiencesRender({ experiences }) {
  return (
    <ContainerRepositories>
      <TitleDescriptionExperience>Experiences</TitleDescriptionExperience>
      {experiences.map((experience, index) => (
        <ItemExperience key={index}>
          <Name>{experience.company}</Name>
          {experience.description && (
            <Description marginBottom={"10px"}>
              {experience.description}
            </Description>
          )}
          {experience.start_at && (
            <Description>Entered into {experience.start_at}</Description>
          )}
          {
            <Description>
              {experience.ends_at ? `Left in ${experience.ends_at}` : "Current"}
            </Description>
          }
        </ItemExperience>
      ))}
    </ContainerRepositories>
  );
}

ExperiencesRender.propTypes = {
  experiences: PropTypes.array.isRequired,
};
