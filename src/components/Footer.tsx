import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Section from './Section';

// interface FooterProps {
// }

const Footer = (): JSX.Element => {
  return (
    <Section padding='0' display='block'>
    <FooterStyles>
      <ul>
        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/pricing'}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={'/'}>Terms of Use</NavLink>
        </li>
        <li>
          <NavLink to={'/'}>Privacy Policy</NavLink>
        </li>
        <li>
          <NavLink to={'/'}>Careers</NavLink>
        </li>
        <li>
          <NavLink to={'/'}>Blog</NavLink>
        </li>
        <li>
          <NavLink to={'/'}>Contact Us</NavLink>
        </li>
      </ul>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <p>
        &copy; Copyright by Afolabi Code Divine. Use for learning or your
        portfolio. Don't use to teach. Don't claim as your own product.
      </p>
      </FooterStyles>
      </Section>
  );
};

export default Footer;

const FooterStyles = styled.footer`
  background-color: #37383d;
  padding: 3rem 0;
  color: aliceblue;
  ul {
    display: flex;
    justify-content: center;
    width: 100%;
    list-style-type: none;
    li {
      margin: 2rem;
      font-size: 1.3rem;
      a:hover {
        color: deepskyblue;
        transition: all 0.5s ease-in-out;
      }
    }
  }
  p {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
  }
`;
const LogoWrapper = styled.div`
  margin: 4rem 0;
  /* height: 5rem; */
  width: 100%;
  display: flex;
  justify-content: center;
`;
