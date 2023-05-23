import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNewAccount } from 'services/authService';
import css from './Forms.module.css';

export const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
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
    const formData = {
      username,
      email,
      password,
      };
      console.log(formData);
    // dispatch(addNewAccount(formData));
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formGroup}>
        <label className={css.label}>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className={css.input}
          />
        </label>
      </div>
      <div className={css.formGroup}>
        <label className={css.label}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={css.input}
          />
        </label>
      </div>
      <div className={css.formGroup}>
        <label className={css.label}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={css.input}
          />
        </label>
      </div>
      <button type="submit" className={css.button}>
        Register
      </button>
    </form>
  );
};


