import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Home = lazy(() => import("./pages/Home/"));

export default function Routes() {
  return (
    <Suspense fallback={<>Carregando</>}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </Suspense>
  );
}
