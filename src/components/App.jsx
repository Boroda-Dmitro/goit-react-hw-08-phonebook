import { ContactsList } from './Contacts/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { allContacts, isLoading, error } from './Redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from './Redux/operation/operation';
import { RegistrationForm } from './forms/registrationForm';
import { LogInForm } from './forms/LogInForm';
import { Layout } from './Layout';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  const contacts = useSelector(allContacts);
  const loading = useSelector(isLoading);
  const isError = useSelector(error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <ContactForm />
                <Filter />
                <ContactsList />
              </>
            }
          />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="login" element={<LogInForm />} />
          <Route path="*" element={<RegistrationForm />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </div>
  );
};
