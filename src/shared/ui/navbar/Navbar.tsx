import  { useState, } from 'react'
import { NavLink, BrowserRouter as Router} from 'react-router-dom';
import logoImg from '../../assets/img/logo.png'
import userImg from '../../assets/img/user.png'
import teamImg from '../../assets/img/team.png'
import lockImg from '../../assets/img/lock.png'
import repoImg from '../../assets/img/repo.svg'
import sidebarImg from './../../assets/img/sidebarimg.png'
import settingsImg from '../../assets/img/Settings.png'
import vectorNavbar from '../../assets/img/vectornavbar.svg'
import './Navbar.css'

 function Navbar() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isPersonalDataDropdownOpen, setIsPersonalDataDropdownOpen] = useState(false);


  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const togglePersonalDataDropdown = () => {
    setIsPersonalDataDropdownOpen(!isPersonalDataDropdownOpen);
  };

  return (
    <div className='navbar'>
      <img src={logoImg} className='logoImg' alt='logoimage'/>
        <div className='sidebarinfo'>
        
              <img src={sidebarImg} className='sidebarimg' alt='sidebarimg'/>
              <h2 className='sidebarName'>Повне ім'я</h2>
              <p className='sidebarPosition'>Посада</p>
          </div>
        <div>
          <ul className='navbarlist'>
            <div className="navbarButtons">
                <button
                  className="navbarButton profileButton"
                  onClick={toggleProfileDropdown}
                  id="profileDropdownButton"
                 
                >
                  <img src={userImg} className="userImg" /> <span className='navbaritem-desc'>Профіль</span>
                  <img src={vectorNavbar} alt="" className='vectorNavbar'/>
                </button>
                {isProfileDropdownOpen && (
                  <div className="dropdown-content">
                    <NavLink to="/portfolio" >
                         <button className="dropdown-item" >Портфоліо</button>
                    </NavLink>
                    <NavLink to="/personaldata">
                    <button className="dropdown-item" onClick={togglePersonalDataDropdown}>Персональні дані <img src={vectorNavbar} alt="" className='vector-second'/></button> 
                    </NavLink>
                    
                    
                  </div>
                  
                )}
                {isPersonalDataDropdownOpen && (
                  <div className="dropdown-content-second">
                    <NavLink to="/skills">
                        <button className="dropdown-item-second">Навички</button>
                    </NavLink>
                    <NavLink to="/specialization" >
                        <button className="dropdown-item-second">Спеціалізація</button>
                    </NavLink>
                    
                    
                  </div>
                  
                )}
              </div>
            <li className="navbarlist-item">
              <NavLink to="/team"  className='navbarButton'>
              <img src={teamImg}/> <span className='navbaritem-desc'>Команда</span>
              </NavLink>
            </li>
            <li className="navbarlist-item">
              <NavLink to="/projects"  className='navbarButton'>
              <img src={lockImg}/> <span className='navbaritem-desc'>Проекти</span>
              </NavLink>
            </li>
            <li className="navbarlist-item ">
              <NavLink to="/repository" className='navbarButton'>
              <img src={repoImg}/> <span className='navbaritem-desc'>Репозиторій</span>
              </NavLink>
            </li>
          </ul>
           
        </div>
        <ul className='navbarlist'>
            <li className="navbarlist-item ">
              <NavLink to="/settings" className='navbarButton settingsBtn' >
              <img src={settingsImg}/> Налаштування
              </NavLink>
            </li>
            </ul>

        </div>
  )
}




const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
