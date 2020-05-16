import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import HomeRender from "./HomeRender";
import {
  getRepositories
} from "../../store/reducers/repositories.reducer";
import {
  getProfile,
} from "../../store/reducers/user.reducer";
import configProfile from "../../../config.profile";

function Home() {
  const dispatch = useDispatch();
  const respositoriesReducer = useSelector(
    (state) => state.repositoriesReducer.repositories
  );
  const profileReducer = useSelector(
    (state) => state.userReducer.profile
  );
  const [username] = useState(configProfile.username || "camunda");

  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await getRepositories(username);
      dispatch(repos);
    };

    const fetchProfile = async () => {
      const user = await getProfile(username);
      dispatch(user);
    };

    fetchRepos();
    fetchProfile();
  }, [username, dispatch]);

  return (
    <HomeRender
      repositories={respositoriesReducer || []}
      profile={profileReducer || {}}
    />
  );
}

export default withRouter(Home);
