import React from 'react';
import {
  ClientName,
  ClientMenuContainer,
  Cursor,
  ClientImage,
  SmallLogo,
  Notification,
  NotificationBadge,
} from './ClientMenuStyles';

import logoQuestion from '../../assets/img/question-circle.svg';
import logoNotifications from '../../assets/img/Notification.png';
import clientImg from './../../assets/img/custom.png';
import arrowDown from '../../assets/img/arrowdown.png';

function ClientMenu() {
  return (
    <ClientMenuContainer className='clientmenu'>
      <Cursor>
        <img src={logoQuestion} className='smallLogos' alt='question' />
      </Cursor>
      <Cursor>
        <img src={logoNotifications} className='smallLogos notification' alt='notification' />
      </Cursor>
      <Notification>
        <NotificationBadge>1</NotificationBadge>
      </Notification>
      <ClientImage src={clientImg} alt='clientimage' />
      <ClientName>User</ClientName>
      <Cursor>
        <img src={arrowDown} className='smallLogos' alt='arrowImg' />
      </Cursor>
    </ClientMenuContainer>
  );
}

export default ClientMenu;