import { Container } from 'components';
import { lighten } from 'polished';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const CardsContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const CardsList = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-bottom: 3rem;
  width: 100vw;
`;

const Card = styled.div`
  align-items: center;
  border: 1px solid ${props => props.theme.defaultBorderColor};
  border-radius: 4px;
  display: flex;
  height: 2rem;
  justify-content: center;
  margin: 1% 1.5%;
  padding: 1rem;
  transition: 0.3s ease;
  user-select: none;
  min-width: 22%;

  :hover {
    background-color: ${props => lighten('.1', props.theme.defaultBorderColor)};
    cursor: pointer;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <CardsContainer>
      <SectionTitle>Components</SectionTitle>
      <CardsList>
        <Card onClick={() => navigate('/button')}>Button</Card>
        <Card onClick={() => navigate('/code')}>Code</Card>
        <Card onClick={() => navigate('/error-text')}>ErrorText</Card>
        <Card onClick={() => navigate('/formatted-currency')}>
          FormattedCurency
        </Card>
        <Card onClick={() => navigate('/input')}>Input</Card>
        <Card onClick={() => navigate('/label')}>Label</Card>
        <Card onClick={() => navigate('/notification')}>Notification</Card>
        <Card onClick={() => navigate('/pagination')}>Pagination</Card>
        <Card onClick={() => navigate('/select')}>Select</Card>
        <Card onClick={() => navigate('/spinner')}>Spinner</Card>
        <Card onClick={() => navigate('/table')}>Table</Card>
      </CardsList>

      <SectionTitle>Hooks</SectionTitle>
      <CardsList>
        <Card onClick={() => navigate('/use-is-mounted')}>useIsMounted</Card>
        <Card onClick={() => navigate('/use-listener')}>useListener</Card>
        <Card onClick={() => navigate('/use-loading')}>useLoading</Card>
        <Card onClick={() => navigate('/use-notification')}>
          useNotification
        </Card>
        <Card onClick={() => navigate('/use-window-size')}>useWindowSize</Card>
      </CardsList>
    </CardsContainer>
  );
};

export { HomePage, HomePage as default };
