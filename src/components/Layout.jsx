import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from './Loader/Loader';
import css from './Layout.module.css';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { isLoggedIn, contactsError, userError } from './Redux/selectors';
import { ErrorMessage } from './Error/error';
import { CiLogin } from 'react-icons/ci';
import { FiBookOpen } from 'react-icons/fi';



const StyledLink = styled(NavLink)`
  &.active {
    color: rgb(236, 83, 83);
  }
`;

export const Layout = () => {
  const loggedIn = useSelector(isLoggedIn);
    const isUserError = useSelector(userError);
  const isContactsError = useSelector(contactsError);
  

  return (
    <div className={css.overlay}>
      <div className={css.nav_box}>
        <nav className={css.navigation}>
          <ul className={css.nav_list}>
            {loggedIn ? (
              <li className={css.nav_item}>
                <StyledLink to="/contacts" className={css.nav_link}>
                  <FiBookOpen/> Phonebook
                </StyledLink>
              </li>
            ) : (
              <>
                <li className={css.nav_item}>
                  <StyledLink to="/register" className={css.nav_link}>
                    <CiLogin /> Register
                  </StyledLink>
                </li>
                <li className={css.nav_item}>
                  <StyledLink to="/login" className={css.nav_link}>
                    <CiLogin /> Login
                  </StyledLink>
                </li>
              </>
            )}
          </ul>
        </nav>
        {loggedIn && <UserMenu />}
      </div>
      {isUserError && ErrorMessage(isUserError)}
      {isContactsError && ErrorMessage(isContactsError)}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
