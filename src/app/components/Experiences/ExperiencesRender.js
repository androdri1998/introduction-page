import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import ItemExperience from "../ItemExperience";
import {
  ContainerRepositories,
  TitleDescriptionExperience,
  SeeMore,
  Observations,
} from "./style";

const LENGTH_EXPERIENCES = 1;

export default function ExperiencesRender({ experiences }) {
  const [seeMore, setSeeMore] = useState(false);

  const lengthExperiences = useMemo(() => {
    return seeMore ? experiences.length : LENGTH_EXPERIENCES;
  }, [seeMore, experiences.length]);

  const handleViewExperiences = (current) => {
    setSeeMore(!current);
  };

  return (
    <ContainerRepositories>
      <TitleDescriptionExperience>
        {experiences.length} Experiences
      </TitleDescriptionExperience>
      {experiences.length > 0 ? (
        experiences
          .filter((item, index) => (index < lengthExperiences ? true : false))
          .map((experience, index) => (
            <ItemExperience key={index} experience={experience} />
          ))
      ) : (
        <Observations>Experiences is not availables</Observations>
      )}
      {experiences.length > LENGTH_EXPERIENCES && (
        <SeeMore
          onClick={() => {
            handleViewExperiences(seeMore);
          }}
        >
          See {seeMore ? "less" : "more experiences"}
        </SeeMore>
      )}
    </ContainerRepositories>
  );
}

ExperiencesRender.propTypes = {
  experiences: PropTypes.array.isRequired,
};
