import { useState } from 'react';
import {
  PageSwitcherContainer,
  PageSwitchMain,
  ExtraText,
  ActiveLink,
  PageSwitchLink,
} from './PageSwitcherStyles';
import ClientMenu from '../clientmenu/ClientMenu';

const PageSwitcher = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <PageSwitcherContainer className='mainpagehelperbar'>
      <div className='mainpageswitch'>
        <PageSwitchMain>
          <PageSwitchLink
            onClick={() => handleTabClick('home')}
            className={activeTab === 'home' ? 'activelink' : 'pageswitch'}
          >
            Дім <ExtraText>q</ExtraText>
          </PageSwitchLink>
          /  
          <PageSwitchLink
            onClick={() => handleTabClick('profile')}
            className={activeTab === 'profile' ? 'activelink' : 'pageswitch'}
          >
            <ExtraText>q</ExtraText> Профіль
          </PageSwitchLink>
        </PageSwitchMain>
      </div>
      <ClientMenu />
    </PageSwitcherContainer>
  );
};

export default PageSwitcher;