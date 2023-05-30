import PropTypes from 'prop-types';
import { LuX } from 'react-icons/lu';
import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteOneContact } from 'components/Redux/operation/operation';
import { BsPersonPlusFill, BsPhoneFill } from 'react-icons/bs';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contacts__item}>
      <p className={css.text}>
        <BsPersonPlusFill /> {name} :
      </p>
      <a href={number} type="tel" className={css.link}>
        <BsPhoneFill /> {number}
      </a>

      <button
        type="button"
        onClick={() => dispatch(deleteOneContact(id))}
        className={css.button}
      >
        <LuX size={24} />
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
