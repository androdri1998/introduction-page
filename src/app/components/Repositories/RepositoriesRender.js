import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import ItemRepository from "../ItemRepository";
import {
  ContainerRepositories,
  TitleDescriptionRepository,
  SeeMore,
  Observations,
} from "./style";
import useInnerWidth from "../../hooks/useInnerWidth";

const LENGTH_REPOSITORIES = 2;

export default function RepositoriesRender({ repositories }) {
  const width = useInnerWidth();
  const [seeMore, setSeeMore] = useState(false);
  const lengthRepositories = useMemo(() => {
    return width > 520 || seeMore ? repositories.length : LENGTH_REPOSITORIES;
  }, [seeMore, repositories.length, width]);

  const handleViewRepositories = (current) => {
    setSeeMore(!current);
  };

  return (
    <ContainerRepositories>
      <TitleDescriptionRepository>
        {repositories.length} Repositories
      </TitleDescriptionRepository>
      {repositories.length > 0 ? (
        repositories
          .filter((item, index) => (index < lengthRepositories ? true : false))
          .map((repository, index) =>
            repository.name !== ".github" ? (
              <ItemRepository repository={repository} key={index} />
            ) : null
          )
      ) : (
        <Observations>Repositories is not availables</Observations>
      )}
      {width <= 520 && repositories.length > LENGTH_REPOSITORIES && (
        <SeeMore
          onClick={() => {
            handleViewRepositories(seeMore);
          }}
        >
          See {seeMore ? "less" : "more repositories"}
        </SeeMore>
      )}
    </ContainerRepositories>
  );
}

RepositoriesRender.propTypes = {
  repositories: PropTypes.array.isRequired,
};
