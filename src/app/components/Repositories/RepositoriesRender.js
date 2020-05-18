import React, { useState, useMemo } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import {
  ContainerRepositories,
  TitleDescriptionRepository,
  Link,
  ItemRepository,
  Description,
  SeeMore,
  Observations,
} from "./style";

const LENGTH_REPOSITORIES = 2;

export default function RepositoriesRender({ repositories }) {
  const [seeMore, setSeeMore] = useState(false);
  const lengthRepositories = useMemo(() => {
    return seeMore ? repositories.length : LENGTH_REPOSITORIES;
  }, [seeMore, repositories.length]);

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
              <ItemRepository key={index}>
                <Link href={repository.html_url} target="_blank">
                  {repository.name}
                </Link>
                {repository.description && (
                  <Description marginBottom={"10px"}>
                    {repository.description}
                  </Description>
                )}
                {repository.language && (
                  <Description>{repository.language}</Description>
                )}
                <Description>
                  Updated at{" "}
                  {moment(repository.updated_at).format("DD/MM/YYYY HH:mm")}
                </Description>
              </ItemRepository>
            ) : null
          )
      ) : (
        <Observations>Repositories is not availables</Observations>
      )}
      {repositories.length > LENGTH_REPOSITORIES && (
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
