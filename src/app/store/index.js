import { combineReducers } from "redux";
import { repositoriesReducer } from "./reducers/repositories.reducer";
import { userReducer } from "./reducers/user.reducer";

const reducers = combineReducers({
  repositoriesReducer: repositoriesReducer,
  userReducer: userReducer
});

export default reducers;
