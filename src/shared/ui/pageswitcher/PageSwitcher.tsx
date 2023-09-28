import { useState } from 'react';

import ClientMenu from '../clientmenu/ClientMenu'
import './pageswitcher.css'



const PageSwitcher = () => {
  const [activeTab, setActiveTab] = useState('home');


  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className='mainpagehelperbar'>
      <div className='mainpageswitch'>
        <p>
          <a onClick={() => handleTabClick('home')} className={activeTab === 'home' ? 'activelink' : 'pageswitch'}>
            Дім <span className='extratext'>q</span>
          </a>
          /
          <a onClick={() => handleTabClick('profile')} className={activeTab === 'profile' ? 'activelink' : 'pageswitch'}>
            <span className='extratext'>q</span> Профіль
          </a>
        </p>
      </div>
      <ClientMenu />
    </div>
  );
};




export default PageSwitcher