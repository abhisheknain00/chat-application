import { Redirect, Route } from 'react-router-dom';

function PublicRoute({ children, ...routeProps }) {
  const profile = false;

  if (profile) {
    return <Redirect to="/" />;
  }

  return <Route {...routeProps}>{children}</Route>;
}

export default PublicRoute;
