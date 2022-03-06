import styled from 'styled-components';

export const PageTitle = styled.h1`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  padding: 1rem;
  text-align: center;
  text-decoration: underline;
`;
