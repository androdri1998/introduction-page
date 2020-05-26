import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import HomeRender from "./HomeRender";
import { getRepositories } from "../../store/reducers/repositories.reducer";
import {
  getProfile,
  getExperiencesUser,
} from "../../store/reducers/user.reducer";
import { getUsername } from "../../utils/gets";

function Home() {
  const dispatch = useDispatch();
  const respositoriesReducer = useSelector(
    (state) => state.repositoriesReducer.repositories
  );
  const profileReducer = useSelector((state) => state.userReducer.profile);
  const experiencesReducer = useSelector(
    (state) => state.userReducer.experiences
  );
  const [username] = useState(getUsername());

  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await getRepositories(username);
      dispatch(repos);
    };

    const fetchProfile = async () => {
      const user = await getProfile(username);
      dispatch(user);
    };

    const fetchExperiences = async () => {
      const experiences = await getExperiencesUser();
      dispatch(experiences);
    };

    fetchRepos();
    fetchProfile();
    fetchExperiences();
  }, [username, dispatch]);

  return (
    <HomeRender
      repositories={respositoriesReducer || []}
      profile={profileReducer || {}}
      experiences={experiencesReducer || []}
    />
  );
}

export default withRouter(Home);
