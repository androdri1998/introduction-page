import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { ItemExperience, Name, Description, SeeMore } from "./style";

const LENGTH_DESCRIPTION = 100;

export default function ItemExperienceRender({ experience }) {
  const [seeDescription, setSeeDescription] = useState(false);
  const lengthDescription = useMemo(() => {
    return !seeDescription
      ? LENGTH_DESCRIPTION
      : experience.description
      ? experience.description.length
      : 0;
  }, [seeDescription, experience.description]);

  const handleViewDrescription = (stateSeeDescription) => {
    setSeeDescription(!stateSeeDescription);
  };

  return (
    <ItemExperience>
      <Name>{experience.company}</Name>
      {experience.description && (
        <Description>{`${experience.description.substr(0, lengthDescription)}${
          experience.description.length > LENGTH_DESCRIPTION && !seeDescription
            ? "..."
            : ""
        }`}</Description>
      )}
      {experience.description &&
        experience.description.length > LENGTH_DESCRIPTION && (
          <SeeMore
            onClick={() => {
              handleViewDrescription(seeDescription);
            }}
          >
            See {seeDescription ? "less" : "complete descrition"}
          </SeeMore>
        )}
      {experience.start_at && (
        <Description marginTop={"10px"}>
          Entered into {experience.start_at}
        </Description>
      )}
      {
        <Description>
          {experience.ends_at ? `Left in ${experience.ends_at}` : "Current"}
        </Description>
      }
    </ItemExperience>
  );
}

ItemExperienceRender.propTypes = {
  experience: PropTypes.object.isRequired,
};
