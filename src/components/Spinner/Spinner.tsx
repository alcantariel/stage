import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface SpinnerProps {
  size?: SizeProp;
}

export const Spinner = ({ size = 'lg', ...rest }: SpinnerProps) => {
  return <FontAwesomeIcon spin icon="spinner" size={size} {...rest} />;
};
