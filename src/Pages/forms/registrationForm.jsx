import { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './Forms.module.css';
import { registerUserThunk } from 'Redux/operation/operation';
import { toast } from 'react-toastify';


export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (password.length < 7) {
      toast.error(`you's password is too shot`);

      return;
    }
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      toast.error('Invalid email address.');
      return;
    }
    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerUserThunk(formData));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formGroup}>
        <label className={css.label}>Username:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={css.input}
        />
      </div>
      <div className={css.formGroup}>
        <label className={css.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={css.input}
        />
      </div>
      <div className={css.formGroup}>
        <label className={css.label}>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className={css.input}
        />
      </div>
      <button type="submit" className={css.button}>
        Register
      </button>
    </form>
  );
}
