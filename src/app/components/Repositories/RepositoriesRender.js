import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import {
  ContainerRepositories,
  TitleDescriptionRepository,
  Link,
  ItemRepository,
  Description,
  Line,
} from "./style";

export default function RepositoriesRender({ repositories }) {
  return (
    <ContainerRepositories>
      <TitleDescriptionRepository>Your repositories</TitleDescriptionRepository>
      {repositories.map((repository, index) =>
        repository.name !== ".github" ? (
          <ItemRepository key={index}>
            <Link href={repository.html_url} target="_blank">
              {repository.name}
            </Link>
            <Line>
              {repository.language && (
                <Description>{repository.language}</Description>
              )}
              <Description>
                Updated at{" "}
                {moment(repository.updated_at).format("DD/MM/YYYY HH:mm")}
              </Description>
            </Line>
          </ItemRepository>
        ) : null
      )}
    </ContainerRepositories>
  );
}

RepositoriesRender.propTypes = {
  repositories: PropTypes.array.isRequired,
};
