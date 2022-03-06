import { PageTitle } from 'components';
import { lighten } from 'polished';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid ${props => props.theme.defaultBorderColor};
  border-radius: 4px;
  padding: 0.5rem;
  text-align: center;
  transition: 0.3s ease;
  user-select: none;
  width: 20%;

  :hover {
    background-color: ${props => lighten('.1', props.theme.defaultBorderColor)};
    cursor: pointer;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageTitle>Components</PageTitle>
      <Card onClick={() => navigate('/pagination')}>Pagination</Card>
    </>
  );
};

export { HomePage, HomePage as default };
