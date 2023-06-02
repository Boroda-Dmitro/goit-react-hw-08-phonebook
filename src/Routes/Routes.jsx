import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../components/Redux/selectors';

export const PrivateRoute = ({ component: Component, redirectedTo = '/' }) => {
  const loggedIn = useSelector(isLoggedIn);

  return loggedIn ? (
    <Component />
  ) : (
    <Navigate to={redirectedTo} replace={true} />
  );
};

export const RestrictedRoute = ({
  component: Component,
  redirectedTo = '/',
}) => {
  const loggedIn = useSelector(isLoggedIn);

  return loggedIn ? (
    <Navigate to={redirectedTo} replace={true} />
  ) : (
    <Component />
  );
};
