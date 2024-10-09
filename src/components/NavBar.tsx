import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

interface NavBarProps {
  isSticky: boolean;
}

const NavBar = ({ isSticky }: NavBarProps) => {
  return (
    <NavbarStyle $isSticky={isSticky}>
      <Logo />
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'products'}>Product</NavLink>
        </li>
        <li>
          <NavLink to={'pricing'}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={'about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'faq'}>FAQ</NavLink>
        </li>

        <li>
          <NavLink to={'booking'}>Booking</NavLink>
        </li>
      </ul>
    </NavbarStyle>
  );
};

export default NavBar;

const NavbarStyle = styled.nav<{ $isSticky: boolean }>`
  position: ${({ $isSticky }) => ($isSticky ? 'fixed' : 'relative')};
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--primary);
  align-items: center;
  z-index: 10;
  border-bottom: 1px solid var(--accent);

  ul {
    display: flex;
    padding: 5px;
    list-style-type: none;
    li {
      margin-right: 2rem;
      a {
        text-decoration: none;
        color: aliceblue;
        &.active {
          color: deepskyblue;
        }
        &:hover {
          color: deepskyblue;
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }
`;
