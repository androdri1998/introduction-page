import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import ItemExperience from "../ItemExperience";
import {
  ContainerRepositories,
  TitleDescriptionExperience,
  SeeMore,
  Observations,
  ContainerGrid,
} from "./style";
import useInnerWidth from "../../hooks/useInnerWidth";

const LENGTH_EXPERIENCES = 1;
const WIDTH_ONE_COLUMN = 768;

export default function ExperiencesRender({ experiences }) {
  const width = useInnerWidth();
  const [seeMore, setSeeMore] = useState(false);

  const lengthExperiences = useMemo(() => {
    return width > WIDTH_ONE_COLUMN || seeMore
      ? experiences.length
      : LENGTH_EXPERIENCES;
  }, [seeMore, experiences.length, width]);

  const handleViewExperiences = (current) => {
    setSeeMore(!current);
  };

  return (
    <ContainerRepositories>
      <TitleDescriptionExperience>
        {experiences.length} Experiences
      </TitleDescriptionExperience>
      <ContainerGrid>
        {experiences.length > 0 ? (
          experiences
            .filter((item, index) => (index < lengthExperiences ? true : false))
            .map((experience, index) => (
              <ItemExperience key={index} experience={experience} />
            ))
        ) : (
          <Observations>Experiences is not availables</Observations>
        )}
      </ContainerGrid>
      {width <= WIDTH_ONE_COLUMN && experiences.length > LENGTH_EXPERIENCES && (
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
