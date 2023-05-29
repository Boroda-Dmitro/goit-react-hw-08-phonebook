import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from './Loader/Loader';
import css from './Layout.module.css';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { isLoggedIn } from './Redux/selectors';

const StyledLink = styled(NavLink)`
  &.active {
    color: rgb(236, 83, 83);
  }
`;

export const Layout = () => {
  const loggedIn = useSelector(isLoggedIn);

  return (
    <div className={css.overlay}>
      <div className={css.nav_box}>
        <nav className={css.navigation}>
          <ul className={css.nav_list}>
            {loggedIn ? (
              <li className={css.nav_item}>
                <StyledLink to="/" className={css.nav_link}>
                  Phonebook
                </StyledLink>
              </li>
            ) : (
              <>
                <li className={css.nav_item}>
                  <StyledLink to="/register" className={css.nav_link}>
                    Register
                  </StyledLink>
                </li>
                <li className={css.nav_item}>
                  <StyledLink to="/login" className={css.nav_link}>
                    Login
                  </StyledLink>
                </li>
              </>
            )}
          </ul>
        </nav>
        {loggedIn && <UserMenu />}
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
