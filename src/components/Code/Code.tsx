import { darken } from 'polished';
import styled from 'styled-components';

export const Code = styled.code`
  background-color: ${props => darken('.1', props.theme.backgroundColor)}};
  border-radius: 4px;
  font-family: courier, monospace;
  padding: 0 0.5rem;
  white-space: pre-wrap;
`;
