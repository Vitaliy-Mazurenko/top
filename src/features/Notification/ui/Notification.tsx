import { FC } from "react";

import { NotificationWrapper, NotificationBadge } from "./Notification.styled";
import NotificationBell from "shared/assets/icons/notification-bell.svg";

interface INotificationProps {
  style?: object;
}

export const Notification: FC<INotificationProps> = ({ style }) => {
  return (
    <NotificationWrapper style={style}>
      <img src={NotificationBell} alt="Notifications" />
      <NotificationBadge>1</NotificationBadge>
    </NotificationWrapper>
  );
};
