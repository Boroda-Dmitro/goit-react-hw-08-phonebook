import { ContactListItem } from './ContactListItem';
import css from './Contactlist.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  allContacts,
  filteredContacts,
  isLoading,
  isLoggedIn,
} from '../Redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../Redux/operation/operation';
import { Loader } from 'components/Loader/Loader';

export const ContactsList = () => {
  const loggedIn = useSelector(isLoggedIn);
  const contacts = useSelector(allContacts);
  const contactsFromFilter = useSelector(filteredContacts);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, loggedIn]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <ul className={css.contacts__box}>
          {contacts.length !== 0 ? (
            contactsFromFilter.length !== 0 ? (
              contactsFromFilter.map(({ id, name, number }) => (
                <ContactListItem key={id} name={name} number={number} id={id} />
              ))
            ) : (
              <p>We couldn't find any matching contacts</p>
            )
          ) : (
            <p>You don't have any contacts</p>
          )}
        </ul>
      )}
    </div>
  );
};
