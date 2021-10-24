import React, { Suspense } from "react";
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";

const ViewMain = React.lazy(() => import("./views"));
const ViewMe = React.lazy(() => import("./views/me"));
const ViewArticle = React.lazy(() => import('./views/article'));
const ViewBlog = React.lazy(() => import('./views/blog'));
const ViewSkills = React.lazy(() => import('./views/skills'));
const ViewServices = React.lazy(() => import('./views/services'));
const ViewProjects = React.lazy(() => import('./views/projects'));
const ViewContactme = React.lazy(() => import('./views/contactme'));

const App = props => {

	return (
		<React.Fragment>
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <Switch>
            <Route
              path="/blog/:key"
              exact
              render={props => (<ViewArticle {...props} />)}
            />
            <Route
              path="/blog"
              exact
              render={props => (<ViewBlog {...props} />)}
            />
            <Route
              path="/skills"
              exact
              render={props => (<ViewSkills {...props} />)}
            />
            <Route
              path="/services"
              exact
              render={props => (<ViewServices {...props} />)}
            />
            <Route
              path="/projects"
              exact
              render={props => (<ViewProjects {...props} />)}
            />
            <Route
              path="/contactme"
              exact
              render={props => (<ViewContactme {...props} />)}
            />
            <Route
              path="/me"
              exact
              render={props => (<ViewMe {...props} />)}
            />
            <Route
              path="/"
              exact
              render={props => (<ViewMain {...props} />)}
            />
            <Redirect to="/error" />
          </Switch>
        </Router>
      </Suspense>
    </React.Fragment>
	);
}

export default App;
