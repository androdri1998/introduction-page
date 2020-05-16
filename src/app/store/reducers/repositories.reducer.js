import { githubApi } from "../../utils/api";

const repositoriesActions = {
  GET_REPOSITORIES: "@user/GET_REPOSITORIES",
};

const INITIAL_STATE = {
  repositories: null,
};

export const repositoriesReducer = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case repositoriesActions.GET_REPOSITORIES:
      return {
        ...state,
        repositories: payload,
      };
    default:
      return state;
  }
};

export const getRepositories = async (username) => {
  const response = await githubApi.get(`/users/${username}/repos`);
  return {
    type: repositoriesActions.GET_REPOSITORIES,
    payload: response.data,
  };
};
