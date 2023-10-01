
// import {
//   PageSwitcherContainer,
//   PageSwitchMain,
//   PageSwitchLink,
// } from './PageSwitcherStyles';
// import ClientMenu from '../clientmenu/ClientMenu';

// const PageSwitcher = () => {
// //   const [setActiveTab] = useState('home');

// //   const handleTabClick = (tab: string) => {
// //     setActiveTab(tab);
// //   };

//   return (
//     <PageSwitcherContainer>
//       <div>
//         <PageSwitchMain>
//           <PageSwitchLink
//             // onClick={() => handleTabClick('home')}
//             // className={activeTab === 'home' ? 'activelink' : 'pageswitch'}
//           >
//             Дім 
//             {/* <ExtraText>q</ExtraText> */}
//           </PageSwitchLink>
//           /  
//           <PageSwitchLink
//             // onClick={() => handleTabClick('')}
//             // className={activeTab === 'profile' ? 'activelink' : 'pageswitch'}
//           >
//             {/* <ExtraText>q</ExtraText>  */}
//             Профіль
//           </PageSwitchLink>
//         </PageSwitchMain>
//       </div>
//       <ClientMenu />
//     </PageSwitcherContainer>
//   );
// };

// export default PageSwitcher;




import { useState } from 'react';
import styled from 'styled-components';
import {
  PageSwitcherContainer,
  PageSwitchMain
} from './PageSwitcherStyles';
import ClientMenu from './../clientmenu/ClientMenu';

interface PageSwitchLinkProps {
  active: boolean;
  onClick: () => void;
}

// Создайте стилизованные компоненты для кнопок
const PageSwitchLink = styled.a<PageSwitchLinkProps>`
  color: ${(props) => (props.active ? '#636366' : '#D6D6D6')};
  cursor: pointer;
  font-size: 12px;
`;


const PageSwitcher = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  activeTab
  return (
    <PageSwitcherContainer>
      <div>
        <PageSwitchMain>
        <PageSwitchLink
            active={activeTab === 'home'}
            onClick={() => handleTabClick('home')}
>
            Дім
          </PageSwitchLink>
          /
          <PageSwitchLink
            active={activeTab === 'profile'}
            onClick={() => handleTabClick('profile')}
          >
            Профіль
          </PageSwitchLink>
        </PageSwitchMain>
      </div>
      <ClientMenu />
    </PageSwitcherContainer>
  );
};

export default PageSwitcher;
