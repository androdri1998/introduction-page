import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { ContainerProfile, Description, SeeMore } from "./style";
import { getDescription } from "../../utils/gets";

const LENGTH_DESCRIPTION = 100;

export default function ProfileRender({ profile }) {
  const [seeDescription, setSeeDescription] = useState(false);
  const lengthDescription = useMemo(() => {
    return !seeDescription ? LENGTH_DESCRIPTION : getDescription().length;
  }, [seeDescription]);

  const handleViewDrescription = (stateSeeDescription) => {
    setSeeDescription(!stateSeeDescription);
  };

  return (
    <ContainerProfile>
      {getDescription() && (
        <Description>
          {`${getDescription().substr(0, lengthDescription)}${
            getDescription().length > 100 && !seeDescription ? "..." : null
          }`}
        </Description>
      )}
      {getDescription().length > 100 && (
        <SeeMore
          onClick={() => {
            handleViewDrescription(seeDescription);
          }}
        >
          See {seeDescription ? "less" : "complete descrition"}
        </SeeMore>
      )}
    </ContainerProfile>
  );
}

ProfileRender.propTypes = {
  profile: PropTypes.object.isRequired,
};
