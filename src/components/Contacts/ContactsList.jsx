import { ContactListItem } from './ContactListItem';
import css from './Contactlist.module.css';
import { useSelector } from 'react-redux';
import { filteredContacts } from 'components/Redux/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../Redux/operation/operation';

export const ContactsList = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(filteredContacts);
  console.log(contacts);
  return (
    <ul className={css.contacts__box}>
      {contacts.length !== 0 ? (
        contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} name={name} number={number} id={id} />
          );
        })
      ) : (
        <p>We don't find this contact</p>
      )}
    </ul>
  );
};
