import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { refreshUser } from '../Redux/operation/operation';
import { Layout } from './Layout';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute, RestrictedRoute } from '../Routes/Routes';
import { isLoggedIn, isRefreshing } from '../Redux/selectors';
import { Loader } from './Loader/Loader';

const ContactsPage = lazy(() => import('../Pages/Contacts/contacts'));
const LogInForm = lazy(() => import('../Pages/forms/LogInForm'));
const RegistrationForm = lazy(() => import('../Pages/forms/registrationForm'));

export const App = () => {
  const loggedIn = useSelector(isLoggedIn);
  const refreshing = useSelector(isRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !refreshing && (
      <div className={css.container}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {loggedIn ? (
                <Route index element={<ContactsPage />} />
              ) : (
                <Route index element={<LogInForm />} />
              )}

              <Route
                path="contacts"
                element={
                  <PrivateRoute
                    component={ContactsPage}
                    redirectedTo="/login"
                  />
                }
              />
              <Route
                path="register"
                element={
                  <RestrictedRoute
                    component={RegistrationForm}
                    redirectedTo="/login"
                  />
                }
              />
              <Route
                path="login"
                element={
                  <RestrictedRoute
                    component={LogInForm}
                    redirectedTo="/contacts"
                  />
                }
              />
              <Route path="*" element={<ContactsPage />}></Route>
            </Route>
          </Routes>
        </Suspense>
        <ToastContainer position="top-center" autoClose={2000} theme="dark" />
      </div>
    )
  );
};
