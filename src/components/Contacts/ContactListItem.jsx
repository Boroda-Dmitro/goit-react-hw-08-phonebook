import PropTypes from 'prop-types';
import { LuX } from 'react-icons/lu';
import { BsPencil } from 'react-icons/bs';
import { useModal } from '../../hooks/useModal';
import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteOneContact } from 'Redux/operation/operation';
import { BsPersonPlusFill, BsPhoneFill } from 'react-icons/bs';
import { Modal } from '../Modal/Modal';
import EditContact from '../EditContact/EditContact';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();
   return (
    <>
      <li className={css.contacts__item}>
        <button type="button" className={css.buttonEdit} onClick={openModal}>
          <BsPencil size={14} />
        </button>

        <p className={css.text}>
          <BsPersonPlusFill /> {name} :
        </p>
        <p className={css.link}>
          <BsPhoneFill /> {number}
        </p>

        <button
          type="button"
          onClick={() => dispatch(deleteOneContact(id))}
          className={css.buttonDel}
        >
          <LuX size={24} />
        </button>
      </li>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <EditContact id={id} onClose={closeModal}></EditContact>
        </Modal>
      )}
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
