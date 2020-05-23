import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ContainerProfile, Description, SeeMore } from "./style";
import { getDescription } from "../../utils/gets";
import useInnerWidth from "../../hooks/useInnerWidth";

const LENGTH_DESCRIPTION = 100;
const WIDTH_ONE_COLUMN = 768;

export default function ProfileRender({ profile }) {
  const width = useInnerWidth();
  const [seeDescription, setSeeDescription] = useState(false);
  const lengthDescription = useMemo(() => {
    return width <= WIDTH_ONE_COLUMN && !seeDescription
      ? LENGTH_DESCRIPTION
      : getDescription().length;
  }, [seeDescription, width]);

  useEffect(() => {
    if (width > WIDTH_ONE_COLUMN) {
      setSeeDescription(true);
    }
  }, []);

  const handleViewDrescription = (stateSeeDescription) => {
    setSeeDescription(!stateSeeDescription);
  };

  return (
    <ContainerProfile>
      {getDescription() && (
        <Description>
          {`${getDescription().substr(0, lengthDescription)}${
            width <= WIDTH_ONE_COLUMN &&
            getDescription().length > LENGTH_DESCRIPTION &&
            !seeDescription
              ? "..."
              : ""
          }`}
        </Description>
      )}
      {width <= WIDTH_ONE_COLUMN &&
        getDescription().length > LENGTH_DESCRIPTION && (
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
