import configProfile from "../../config.profile";

export const getUsername = () => {
  if (!configProfile.username) throw new Error("Username Not Found");
  return configProfile.username;
};

export const getPhoto = () => {
  return configProfile.photo;
};

export const getName = () => {
  if (!configProfile.name) throw new Error("Name Not Found");
  return configProfile.name;
};

export const getDescription = () => {
  if (!configProfile.decription) throw new Error("Description Not Found");
  return configProfile.decription;
};

export const getExperiences = () => {
  return configProfile.experiences || [];
};
