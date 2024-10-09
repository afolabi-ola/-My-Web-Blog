import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

// interface PageNotFoundProps {
// }

const PageNotFound = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <PageNotFoundStyles>
      <h1>Sorry The Page Not Found :(</h1>
      <BackButton onClick={() => navigate('/')}>Back to homepage</BackButton>
    </PageNotFoundStyles>
  );
};

export default PageNotFound;

const PageNotFoundStyles = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: red;
  font-weight: 700;
  background-color: #000000;
  h1{
    margin-bottom: 20px;
  }
`;
