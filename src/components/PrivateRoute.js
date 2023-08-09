import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ children, ...routeProps }) {
  const profile = true;

  if (!profile) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routeProps}>{children}</Route>;
}

export default PrivateRoute;
