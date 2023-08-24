import { useState } from 'react';
import css from './EditContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { allContacts } from 'Redux/selectors';
import { toast } from 'react-toastify';
import { BsPersonPlus } from 'react-icons/bs';
import { editContact } from 'Redux/operation/operation';

const EditContact = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(allContacts);

  const contact = contacts.find(contact => contact._id === id);

  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);

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
    const editedContact = {
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
      dispatch(editContact({id, editedContact}));
      onClose()
    }
  };

  return (
    <div className={css.box}>
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
          <BsPersonPlus /> Edit contact
        </button>
      </form>
    </div>
  );
};

export default EditContact;
