import { postNewContact } from 'Redux/operation/operation';
import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allContacts } from 'Redux/selectors';
import { toast } from 'react-toastify';
import { BsPersonPlus } from 'react-icons/bs';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(allContacts);

  const handleChange = e => {
    const target = e.target.name;
    if (target === 'name') {
      setName(e.target.value);
    } else {
      setPhone(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      phone,
    };
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === phone
      )
    ) {
      toast.error(`${name} or ${phone} is already in contacts`);
    } else {
      dispatch(postNewContact(newContact));
      setName('');
      setPhone('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={phone}
        />
      </label>
      <button type="submit" className={css.button}>
        <BsPersonPlus /> Add contacts
      </button>
    </form>
  );
};
