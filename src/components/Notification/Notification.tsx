import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsMounted } from 'hooks';
import { darken, lighten } from 'polished';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
  useState
} from 'react';
import styled, { keyframes } from 'styled-components';
import { commonTheme } from 'theme';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface NotificationValue {
  id?: string;
  message: string;
  type: NotificationType;
}

export interface NotificationProps {
  onDestroy: () => void;
  value: NotificationValue;
}

interface StyledNotificationContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant: NotificationType;
}

interface StyledNotificationIconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant: NotificationType;
}

export const NOTIFICATION_TIME = 3;
export const NOTIFICATION_TIME_IN_MS = NOTIFICATION_TIME * 1000;

export const StyledNotificationsContainer = styled.div`
  overflow: hidden auto;
  padding: 10px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 1000;
`;

const fadeIn = keyframes`
  from {
    right: 0;
    opacity: 0;
  }

  to {
    right: 10px;
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    right: 10px;
    opacity: 1;
  }

  to {
    right: 0;
    opacity: 0;
  }
`;

const StyledNotificationContainer = styled.div<StyledNotificationContainerProps>`
  animation: ${fadeIn} 0.3s, ${fadeOut} 0.3s ${NOTIFICATION_TIME - 1}.5s;
  animation-fill-mode: forwards;
  background-color: ${props => lighten('.2', variants[props.variant])};
  border-color: ${props => variants[props.variant]};
  border-radius: 8px;
  border-style: solid;
  box-shadow: 0 4px 4px 0 ${props => darken('.1', props.theme.shadowColor)};
  color: ${props => darken('.3', variants[props.variant])};
  display: flex;
  flex-direction: row;
  font-size: 14px;
  height: 60px;
  justify-content: space-between;
  margin-top: 10px;
  width: 300px;

  :hover {
    animation-play-state: paused;
  }
`;

const StyledNotificationIcon = styled.div<StyledNotificationIconProps>`
  align-items: center;
  background-color: ${props => variants[props.variant]};
  border-radius: 4px 0 0 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  min-width: 30px;
`;

const StyledNotificationText = styled.div`
  flex: auto;
  padding: 10px;
  word-break: break-all;
`;

const StyledNotificationCloseButton = styled.div`
  display: flex;
  padding: 10px;

  svg {
    cursor: pointer;
  }
`;

const icons: Record<NotificationType, JSX.Element> = {
  info: <FontAwesomeIcon icon="info" data-testid="info_icon" />,
  error: <FontAwesomeIcon icon="times" data-testid="error_icon" />,
  success: <FontAwesomeIcon icon="check" data-testid="success_icon" />,
  warning: <FontAwesomeIcon icon="exclamation" data-testid="warning_icon" />
};

const variants: Record<NotificationType, string> = {
  info: commonTheme.infoColor,
  error: commonTheme.errorColor,
  warning: commonTheme.warningColor,
  success: commonTheme.successColor
};

export const Notification = ({ value, onDestroy }: NotificationProps) => {
  const mounted = useIsMounted();
  const timeout = useRef<NodeJS.Timeout>();
  const [mouseIn, setMouseIn] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    (async () => {
      const reset = () => {
        return new Promise(resolve => {
          timeout.current = setTimeout(() => {
            setVisible(false);
            resolve(true);
          }, NOTIFICATION_TIME_IN_MS);
        });
      };

      await reset();
    })();

    return () => {
      clearTimeout(timeout.current!);
    };
  }, []);

  useEffect(() => {
    if (mounted && mouseIn) {
      onDestroy();
    }
  }, [mouseIn, onDestroy]);

  const close = (): void => {
    setMouseIn(false);
    setVisible(false);
  };

  return visible || mouseIn ? (
    <StyledNotificationContainer
      variant={value.type}
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
      data-testid={`${value.id}_notification_container`}
    >
      <StyledNotificationIcon variant={value.type}>
        {icons[value.type]}
      </StyledNotificationIcon>
      <StyledNotificationText data-testid={`${value.id}_notification_message`}>
        {value.message}
      </StyledNotificationText>
      <StyledNotificationCloseButton
        onClick={close}
        data-testid={`${value.id}_close_notification_icon`}
      >
        <FontAwesomeIcon icon="times" />
      </StyledNotificationCloseButton>
    </StyledNotificationContainer>
  ) : null;
};
