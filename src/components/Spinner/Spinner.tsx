import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface SpinnerProps {
  size?: SizeProp;
  className?: string;
}

export const Spinner = (props: SpinnerProps) => {
  const { size = 'lg', className = '', ...rest } = props;

  return (
    <FontAwesomeIcon
      {...rest}
      spin
      size={size}
      icon="spinner"
      className={className}
    />
  );
};
