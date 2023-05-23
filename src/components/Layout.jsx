import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from './Loader/Loader';
import css from './Layout.module.css';
import { UserMenu } from './UserMenu/UserMenu';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: rgb(236, 83, 83);
  }
`;

export const Layout = () => {
  return (
    <>
      <nav className={css.nav}>
        <ul className={css.nav_list}>
          <li className={css.nav_item}>
            <StyledLink to="/" className={css.nav_link}>
              Phonebook
            </StyledLink>
          </li>
          <li className={css.nav_item}>
            <StyledLink to="/register" className={css.nav_link}>
              Register
            </StyledLink>
            <StyledLink to="/login" className={css.nav_link}>
              Login
            </StyledLink>
          </li>
        </ul>
        <UserMenu />
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};


