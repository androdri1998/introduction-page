import React, { useState, useMemo } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { ItemRepository, Link, Description, SeeMore } from "./style";

const LENGTH_DESCRIPTION = 100;

export default function ItemRepositoryRender({ repository }) {
  const [seeDescription, setSeeDescription] = useState(false);
  const lengthDescription = useMemo(() => {
    return !seeDescription
      ? LENGTH_DESCRIPTION
      : repository.description
      ? repository.description.length
      : 0;
  }, [seeDescription, repository.description]);

  const handleViewDrescription = (stateSeeDescription) => {
    setSeeDescription(!stateSeeDescription);
  };

  return (
    <ItemRepository>
      <Link href={repository.html_url} target="_blank">
        {repository.name}
      </Link>
      {repository.description && (
        <Description marginBottom={"10px"}>
          {`${repository.description.substr(0, lengthDescription)}${
            repository.description.length > LENGTH_DESCRIPTION &&
            !seeDescription
              ? "..."
              : ""
          }`}
        </Description>
      )}
      {repository.description &&
        repository.description.length > LENGTH_DESCRIPTION && (
          <SeeMore
            onClick={() => {
              handleViewDrescription(seeDescription);
            }}
          >
            See {seeDescription ? "less" : "complete descrition"}
          </SeeMore>
        )}
      {repository.language && (
        <Description marginTop={"10px"}>{repository.language}</Description>
      )}
      <Description>
        Updated at {moment(repository.updated_at).format("DD/MM/YYYY HH:mm")}
      </Description>
    </ItemRepository>
  );
}

ItemRepositoryRender.propTypes = {
  repository: PropTypes.object.isRequired,
};
