import  { useState, } from 'react'
import { NavLink, BrowserRouter as Router} from 'react-router-dom';
import logoImg from 'shared/assets/img/logo.svg'
import userImg from 'shared/assets/img/user.png'
import teamImg from 'shared/assets/img/team.png'
import lockImg from 'shared/assets/img/lock.png'
import repoImg from 'shared/assets/img/repo.svg'
import sidebarImg from 'shared/assets/img/sidebarimg.png'
import settingsImg from 'shared/assets/img/Settings.png'
import vectorNavbar from 'shared/assets/img/vectornavbar.svg'
// import './Navbar.css'
import {
  NavbarContainer,
  LogoImg,
  SidebarInfo,
  SidebarImg,
  SidebarName,
  SidebarPosition,
  NavbarList,
  NavLinkStyled,
  VectorNavbar,
  DropdownContent,
  DropdownItem,
  DropdownItemSecond,
  ProfileButton,
  DropdownContentSecond,
  SettingsBtn,
} from './NavbarStyles';


  const Navbar = () => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isPersonalDataDropdownOpen, setIsPersonalDataDropdownOpen] = useState(false);
  
    const toggleProfileDropdown = () => {
      setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };
  
    const togglePersonalDataDropdown = () => {
      setIsPersonalDataDropdownOpen(!isPersonalDataDropdownOpen);
    };

  return (
//     <div className='navbar'>
//       <img src={logoImg} className='logoImg' alt='logoimage'/>
//         <div className='sidebarinfo'>
        
//               <img src={sidebarImg} className='sidebarimg' alt='sidebarimg'/>
//               <h2 className='sidebarName'>Повне ім'я</h2>
//               <p className='sidebarPosition'>Посада</p>
//           </div>
//         <div>
//           <ul className='navbarlist'>
//             <div className="navbarButtons">
//                 <button
//                   className="navbarButton profileButton"
//                   onClick={toggleProfileDropdown}
//                   id="profileDropdownButton"
                 
//                 >
//                   <img src={userImg} className="userImg" /> <span className='navbaritem-desc'>Профіль</span>
//                   <img src={vectorNavbar} alt="" className='vectorNavbar'/>
//                 </button>
//                 {isProfileDropdownOpen && (
//                   <div className="dropdown-content">
//                     <NavLink to="/portfolio" >
//                          <button className="dropdown-item" >Портфоліо</button>
//                     </NavLink>
//                     <NavLink to="/personaldata">
//                     <button className="dropdown-item" onClick={togglePersonalDataDropdown}>Персональні дані <img src={vectorNavbar} alt="" className='vector-second'/></button> 
//                     </NavLink>
                    
                    
//                   </div>
                  
//                 )}
//                 {isPersonalDataDropdownOpen && (
//                   <div className="dropdown-content-second">
//                     <NavLink to="/skills">
//                         <button className="dropdown-item-second">Навички</button>
//                     </NavLink>
//                     <NavLink to="/specialization" >
//                         <button className="dropdown-item-second">Спеціалізація</button>
//                     </NavLink>
                    
                    
//                   </div>
                  
//                 )}
//               </div>
//             <li className="navbarlist-item">
//               <NavLink to="/team"  className='navbarButton'>
//               <img src={teamImg}/> <span className='navbaritem-desc'>Команда</span>
//               </NavLink>
//             </li>
//             <li className="navbarlist-item">
//               <NavLink to="/projects"  className='navbarButton'>
//               <img src={lockImg}/> <span className='navbaritem-desc'>Проекти</span>
//               </NavLink>
//             </li>
//             <li className="navbarlist-item ">
//               <NavLink to="/repository" className='navbarButton'>
//               <img src={repoImg}/> <span className='navbaritem-desc'>Репозиторій</span>
//               </NavLink>
//             </li>
//           </ul>
           
//         </div>
//         <ul className='navbarlist'>
//             <li className="navbarlist-item ">
//               <NavLink to="/settings" className='navbarButton settingsBtn' >
//               <img src={settingsImg}/> <span className='navbaritem-desc'>Налаштування</span>
//               </NavLink>
//             </li>
//             </ul>

//         </div>
//   )
// }

<NavbarContainer>
<LogoImg src={logoImg} alt='logoimage' />
<SidebarInfo>
  <SidebarImg src={sidebarImg} alt='sidebarimg' />
  <SidebarName>Повне ім'я</SidebarName>
  <SidebarPosition>Посада</SidebarPosition>
</SidebarInfo>
<div>
  <NavbarList>
    <div>
      <ProfileButton
       onClick={toggleProfileDropdown} 
       id='profileDropdownButton'
      >
        <img src={userImg}/> <span>Профіль</span>
        <VectorNavbar src={vectorNavbar} alt='vectornavbar'/>
      </ProfileButton>
      {isProfileDropdownOpen && (
        <DropdownContent>
          <NavLinkStyled to='/portfolio'>
            <DropdownItem>Портфоліо</DropdownItem>
          </NavLinkStyled>
          <NavLinkStyled to='/personaldata'>
            <DropdownItem onClick={togglePersonalDataDropdown}>
              Персональні дані <VectorNavbar src={vectorNavbar} alt=''/>
            </DropdownItem>
          </NavLinkStyled>
        </DropdownContent>
      )}
      {isPersonalDataDropdownOpen && (
        <DropdownContentSecond >
          <NavLinkStyled to='/skills'>
            <DropdownItemSecond>Навички</DropdownItemSecond>
          </NavLinkStyled>
          <NavLinkStyled to='/specialization'>
            <DropdownItemSecond>Спеціалізація</DropdownItemSecond>
          </NavLinkStyled>
        </DropdownContentSecond>
      )}
    </div>
    <li >
      <NavLink to='/team'>
      <ProfileButton >
        <img src={teamImg} /> <span>Команда</span>
      </ProfileButton>
      </NavLink>
    </li>
    <li>
      <NavLink to='/projects'>
      <ProfileButton >
        <img src={lockImg} /> <span>Проекти</span>
      </ProfileButton>
      </NavLink>
    </li>
    <li >
      <NavLink to='/repository' >
      <ProfileButton>
        <img src={repoImg} /> <span>Репозиторій</span>
      </ProfileButton>
      </NavLink>
    </li>
  </NavbarList>
</div>
<ul >
  <li >
    <NavLink to='/settings'>
    <SettingsBtn >
      <img src={settingsImg} /> <span>Налаштування</span>
    </SettingsBtn>
    </NavLink>
  </li>
</ul>
</NavbarContainer>
);
};


const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
