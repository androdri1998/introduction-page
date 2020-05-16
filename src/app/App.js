import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./store";
import Routes from "./routes";
import GlobalStyle from "./styled/global";

const store = createStore(reducers, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <>
        <GlobalStyle />
        <Routes />
      </>
    </Provider>
  );
}

export default App;
