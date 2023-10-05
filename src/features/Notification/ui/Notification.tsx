import { FC } from "react";

import { NotificationWrapper, NotificationBadge } from "./Notification.styled";
import NotificationBell from "shared/assets/icons/notification-bell.svg";

interface INotificationProps {
  className?: string;
}

export const Notification: FC<INotificationProps> = ({ className }) => {
  return (
    <NotificationWrapper className={className}>
      <img src={NotificationBell} alt="Notifications" />
      <NotificationBadge>1</NotificationBadge>
    </NotificationWrapper>
  );
};
