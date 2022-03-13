import { Container } from 'components';
import { lighten } from 'polished';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Card = styled.div`
  align-items: center;
  border: 1px solid ${props => props.theme.defaultBorderColor};
  border-radius: 4px;
  display: flex;
  height: 2.5rem;
  justify-content: center;
  padding: 0.5rem;
  transition: 0.3s ease;
  user-select: none;
  width: 200px;

  :hover {
    background-color: ${props => lighten('.1', props.theme.defaultBorderColor)};
    cursor: pointer;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Card onClick={() => navigate('/pagination')}>Pagination</Card>
    </Container>
  );
};

export { HomePage, HomePage as default };
