import { githubApi } from "../../utils/api";
import configProfile from "../../../config.profile";

const userActions = {
  GET_EXPERIENCES: "@user/GET_EXPERIENCES",
  GET_PROFILE: "@user/GET_PROFILE",
};

const INITIAL_STATE = {
  profile: null,
  experiences: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case userActions.GET_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    case userActions.GET_EXPERIENCES:
      return {
        ...state,
        experiences: payload,
      };
    default:
      return state;
  }
};

export const getExperiences = async () => {
  return {
    type: userActions.GET_EXPERIENCES,
    payload: configProfile.experiences,
  };
};

export const getProfile = async (username) => {
  const response = await githubApi.get(`/users/${username}`);
  return {
    type: userActions.GET_PROFILE,
    payload: response.data,
  };
};
