import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.theme.textColor};
  padding: 1rem;

  * {
    color: ${props => props.theme.textColor};
  }
`;
