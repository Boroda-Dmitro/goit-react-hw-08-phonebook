import { ContactsList } from './Contacts/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './Redux/operation/operation';
import { RegistrationForm } from './forms/registrationForm';
import { LogInForm } from './forms/LogInForm';
import { Layout } from './Layout';
import { Routes, Route } from 'react-router-dom';
// import { isLoggedIn } from './Redux/selectors';
import { PrivateRoute, RestrictedRoute } from './Redux/Routes/Routes';

export const App = () => {
  // const loggedIn = useSelector(isLoggedIn);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const logged = () => (
    <>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );

  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LogInForm />} />
          <Route
            path="contacts"
            element={<PrivateRoute component={logged} redirectedTo="login" />}
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={RegistrationForm}
                redirectedTo="contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={LogInForm} redirectedTo="contacts" />
            }
          />
          <Route path="*" element={<LogInForm />}></Route>
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </div>
  );
};
