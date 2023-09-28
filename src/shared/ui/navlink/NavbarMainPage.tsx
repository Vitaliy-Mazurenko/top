import React, { useState, useEffect } from 'react';
import { NavLink, BrowserRouter as Router, useLocation } from 'react-router-dom';

import './navlink.css';
import Navbar from '../navbar/Navbar';

const NavbarMainPage = () => {
  const activeLink = "mainpageswitcher mainpage--active";
  const normalLink = "mainpageswitcher";
  const location = useLocation(); 


  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
   
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <nav className='navbarmainpage'>            
        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink exact to="/settings" className={activeTab === '/settings' ? activeLink : normalLink}>
              Налаштування
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to="/notifications" className={activeTab === '/notifications' ? activeLink : normalLink}>
              Сповіщення
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to="/projects" className={activeTab === '/projects' ? activeLink : normalLink}>
              Проєкти
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to="/team" className={activeTab === '/team' ? activeLink : normalLink}>
              Команда
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <NavbarMainPage />
    </Router>
  );
};

export default App;
