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

const CardItem = styled.div`
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
        <CardItem onClick={() => navigate('/button')}>Button</CardItem>
        <CardItem onClick={() => navigate('/formatted-currency')}>
          FormattedCurency
        </CardItem>
        <CardItem onClick={() => navigate('/input')}>Input</CardItem>
        <CardItem onClick={() => navigate('/notification')}>
          Notification
        </CardItem>
        <CardItem onClick={() => navigate('/pagination')}>Pagination</CardItem>
        <CardItem onClick={() => navigate('/select')}>Select</CardItem>
        <CardItem onClick={() => navigate('/spinner')}>Spinner</CardItem>
        <CardItem onClick={() => navigate('/table')}>Table</CardItem>
      </CardsList>

      <SectionTitle>Hooks</SectionTitle>
      <CardsList>
        <CardItem onClick={() => navigate('/use-is-mounted')}>
          useIsMounted
        </CardItem>
        <CardItem onClick={() => navigate('/use-listener')}>
          useListener
        </CardItem>
        <CardItem onClick={() => navigate('/use-loading')}>useLoading</CardItem>
        <CardItem onClick={() => navigate('/use-notification')}>
          useNotification
        </CardItem>
        <CardItem onClick={() => navigate('/use-window-size')}>
          useWindowSize
        </CardItem>
      </CardsList>
    </CardsContainer>
  );
};

export { HomePage, HomePage as default };
