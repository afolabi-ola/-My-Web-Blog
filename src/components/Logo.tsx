import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Logo = (): JSX.Element => {
  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <LogoStyles onClick={handleLogoClick}>
      <NavLink to={'/'}>
        <img src='./images/logo4.svg' alt='logo' />
      </NavLink>
    </LogoStyles>
  );
};

export default Logo;

const LogoStyles = styled.div`
  width: 100px;
  height: 70px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
`;
