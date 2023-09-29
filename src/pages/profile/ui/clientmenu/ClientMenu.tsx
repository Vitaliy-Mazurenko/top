import {
  ClientName,
  ClientMenuContainer,
  Cursor,
  ClientImage,
  Notification,
  NotificationBadge,
} from './ClientMenuStyles';

import logoQuestion from 'shared/assets/img/question-circle.svg';
import logoNotifications from 'shared/assets/img/Notification.png';
import clientImg from 'shared/assets/img/custom.png';
import arrowDown from 'shared/assets/img/arrowdown.png';

function ClientMenu() {
  return (
    <ClientMenuContainer>
      <Cursor>
        <img src={logoQuestion}  alt='question' />
      </Cursor>
      <Cursor>
        <img src={logoNotifications} alt='notification' />
      </Cursor>
      <Notification>
        <NotificationBadge>1</NotificationBadge>
      </Notification>
      <ClientImage src={clientImg} alt='clientimage' />
      <ClientName>User</ClientName>
      <Cursor>
        <img src={arrowDown}alt='arrowImg' />
      </Cursor>
    </ClientMenuContainer>
  );
}

export default ClientMenu;